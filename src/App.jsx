import { useEffect, useMemo, useState } from "react";
import {
  defaultSliders
} from "./data/config";
import { ideologyPresets, politicalGoals } from "./data/presets";
import { roleList, segmentOptionalRoles } from "./data/roles";
import { segments, segmentMap } from "./data/segments";
import {
  calculateScenario,
  generatePoliticalCopy,
  getPerspectiveShift,
  getResultSummary
} from "./lib/simulation";
import { ProgressHeader } from "./components/ProgressHeader";
import { StartScreen } from "./components/StartScreen";
import { RoleSelectionScreen } from "./components/RoleSelectionScreen";
import { SegmentSelectionScreen } from "./components/SegmentSelectionScreen";
import { PolicyControlsScreen } from "./components/PolicyControlsScreen";
import { SimulationScreen } from "./components/SimulationScreen";
import { ResultScreen } from "./components/ResultScreen";
import { DemoRoute } from "./components/DemoRoute";
import { ContentRoute } from "./components/ContentRoute";

const reviewRoutes = new Set(["demo", "content"]);

function parseLocation(pathname, search) {
  const parts = pathname.split("/").filter(Boolean);
  const last = parts.at(-1);
  const route = reviewRoutes.has(last) ? last : "app";
  const baseParts = route === "app" ? parts : parts.slice(0, -1);
  const basePath = `/${baseParts.join("/")}`.replace(/\/+/g, "/") || "/";
  const params = new URLSearchParams(search);

  return {
    route,
    basePath,
    debug: params.get("debug") === "true"
  };
}

const steps = {
  start: 0,
  role: 1,
  segment: 2,
  controls: 3,
  simulation: 4,
  result: 5
};

const screenTitles = {
  start: "Geführte Simulation",
  role: "Rolle wählen",
  segment: "Segment wählen",
  controls: "Politische Stellschrauben",
  simulation: "Wirkung sehen",
  result: "Politisches Fazit"
};

function App() {
  const [routeState, setRouteState] = useState(() =>
    parseLocation(window.location.pathname, window.location.search)
  );
  const [screen, setScreen] = useState("start");
  const [role, setRole] = useState("politics");
  const [segment, setSegment] = useState(null);
  const [policyGoal, setPolicyGoal] = useState("exploitation");
  const [sliders, setSliders] = useState(defaultSliders);
  const [preset, setPreset] = useState("custom");
  const [presetSource, setPresetSource] = useState(null);

  const activeRole = roleList.find((item) => item.id === role);
  const activeSegment = segment ? segmentMap[segment] : null;
  const canSkipSegment = segmentOptionalRoles.includes(role);

  const result = useMemo(
    () => calculateScenario({ role, segment, sliders, policyGoal }),
    [role, segment, sliders, policyGoal]
  );

  const perspectiveShift = useMemo(
    () => getPerspectiveShift({ role, result }),
    [role, result]
  );

  const summary = useMemo(() => getResultSummary({ result }), [result]);
  const comparisonModels = useMemo(
    () =>
      ideologyPresets.map((entry) => {
        const scenario =
          entry.id === "custom"
            ? result
            : calculateScenario({ role, segment, sliders: entry.sliders, policyGoal });

        return {
          ...entry,
          scenario,
          copy: generatePoliticalCopy({
            role: activeRole,
            result: scenario,
            presetId: entry.id
          })
        };
      }),
    [activeRole, policyGoal, result, role, segment]
  );

  const segmentComparisons = useMemo(
    () =>
      segments.map((entry) => ({
        id: entry.id,
        label: entry.label,
        summary: entry.summary,
        scenario: calculateScenario({ role, segment: entry.id, sliders, policyGoal })
      })),
    [policyGoal, role, sliders]
  );

  const navigateTo = (route) => {
    const nextPath =
      route === "app"
        ? routeState.basePath
        : `${routeState.basePath.replace(/\/$/, "")}/${route}`;
    const search = routeState.debug ? "?debug=true" : "";
    window.history.pushState({}, "", `${nextPath}${search}`);
    setRouteState(parseLocation(window.location.pathname, window.location.search));
  };

  useEffect(() => {
    const handlePopState = () =>
      setRouteState(parseLocation(window.location.pathname, window.location.search));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleRoleNext = () => {
    if (canSkipSegment) {
      setSegment(null);
      setScreen("controls");
      return;
    }

    setSegment(segments[0].id);
    setScreen("segment");
  };

  const handleSliderChange = (key, value) => {
    const activePreset = ideologyPresets.find((entry) => entry.id === preset);
    setSliders((current) => ({ ...current, [key]: value }));
    if (activePreset && activePreset.id !== "custom") {
      setPresetSource(activePreset.label);
    }
    setPreset("custom");
  };

  const handlePresetChange = (presetId) => {
    const nextPreset = ideologyPresets.find((entry) => entry.id === presetId);
    if (!nextPreset) return;
    setPreset(presetId);
    setPresetSource(null);
    setSliders({ ...nextPreset.sliders });
  };

  const handleRestart = () => {
    setScreen("start");
    setRole("politics");
    setSegment(null);
    setPolicyGoal("exploitation");
    setSliders(defaultSliders);
    setPreset("custom");
    setPresetSource(null);
  };

  return (
    <div className="min-h-screen bg-ink text-mist">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(78,183,173,0.18),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(212,175,106,0.16),transparent_26%),linear-gradient(180deg,#111315_0%,#171a1d_100%)]" />
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:36px_36px] opacity-20" />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <ProgressHeader
          step={steps[screen]}
          title={routeState.route === "app" ? screenTitles[screen] : routeState.route}
          route={routeState.route}
          debug={routeState.debug}
          onNavigate={navigateTo}
        />

        {routeState.route === "demo" ? (
          <DemoRoute
            roles={roleList}
            segments={segments}
            presets={ideologyPresets}
            policyGoal={policyGoal}
            debug={routeState.debug}
          />
        ) : null}

        {routeState.route === "content" ? (
          <ContentRoute debug={routeState.debug} />
        ) : null}

        {routeState.route !== "app" ? null : (
          <>
            {screen === "start" ? (
              <StartScreen onStart={() => setScreen("role")} />
            ) : null}

            {screen === "role" ? (
              <RoleSelectionScreen
                roles={roleList}
                activeRole={role}
                onSelectRole={setRole}
                onNext={handleRoleNext}
              />
            ) : null}

            {screen === "segment" ? (
              <SegmentSelectionScreen
                roleLabel={activeRole.label}
                segments={segments}
                selectedSegment={segment}
                onSelectSegment={setSegment}
                canSkip={canSkipSegment}
                onBack={() => setScreen("role")}
                onNext={() => setScreen("controls")}
              />
            ) : null}

            {screen === "controls" ? (
              <PolicyControlsScreen
                role={activeRole}
                segment={activeSegment}
                sliders={sliders}
                policyGoal={policyGoal}
                policyGoals={politicalGoals}
                onPolicyGoalChange={setPolicyGoal}
                preset={preset}
                presets={ideologyPresets}
                onPresetChange={handlePresetChange}
                onSliderChange={handleSliderChange}
                presetSource={presetSource}
                onBack={() => setScreen(canSkipSegment ? "role" : "segment")}
                onNext={() => setScreen("simulation")}
                preview={result}
                comparisonModels={comparisonModels}
                segmentComparisons={segmentComparisons}
                debug={routeState.debug}
              />
            ) : null}

            {screen === "simulation" ? (
              <SimulationScreen
                role={activeRole}
                segment={activeSegment}
                result={result}
                policyGoal={politicalGoals.find((entry) => entry.id === policyGoal)}
                preset={ideologyPresets.find((entry) => entry.id === preset)}
                sliders={sliders}
                onBack={() => setScreen("controls")}
                onNext={() => setScreen("result")}
                perspectiveShift={perspectiveShift}
                segmentComparisons={segmentComparisons}
                debug={routeState.debug}
                summary={summary}
              />
            ) : null}

            {screen === "result" ? (
              <ResultScreen
                role={activeRole}
                segment={activeSegment}
                summary={summary}
                result={result}
                preset={preset}
                presetSource={presetSource}
                policyGoal={politicalGoals.find((entry) => entry.id === policyGoal)}
                sliders={sliders}
                debug={routeState.debug}
                onBack={() => setScreen("simulation")}
                onRestart={handleRestart}
              />
            ) : null}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
