import { coercionLayer, keyMessage } from "../data/config";
import { calculateScenario, getResultSummary } from "../lib/simulation";

function DemoMetric({ label, value, tone = "default" }) {
  const toneClass =
    tone === "good"
      ? "text-emerald-300"
      : tone === "danger"
        ? "text-rust"
        : "text-gold";

  return (
    <div className="rounded-[18px] border border-white/10 bg-black/25 p-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${toneClass}`}>{value}</p>
    </div>
  );
}

function ScenarioCard({ title, role, segment, scenario, preset, debug }) {
  const summary = getResultSummary({ result: scenario });

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
      <p className="text-xl font-semibold text-mist">{title}</p>
      <p className="mt-2 text-sm leading-7 text-mist/72">
        {role.label}
        {segment ? ` · ${segment.label}` : " · Gesamtsystem"}
        {preset ? ` · ${preset.label}` : ""}
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <DemoMetric label="Infrastruktur" value={scenario.outputs.infrastructure} tone="good" />
        <DemoMetric label="Verlagerung" value={scenario.outputs.displacement} />
        <DemoMetric label="Zwang bekämpfbar" value={scenario.outputs.coercionControl} tone="good" />
        <DemoMetric label="Schaden" value={scenario.outputs.damage} tone="danger" />
      </div>
      <p className="mt-4 text-sm leading-7 text-mist/72">{summary}</p>
      <p className="mt-3 text-sm leading-7 text-mist/60">
        Policy-Check: {scenario.policyCheck.verdict}
      </p>
      {debug ? (
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-[18px] border border-white/10 bg-black/25 p-4 text-xs leading-6 text-mist/72">
          {JSON.stringify(
            {
              role: role.id,
              segment: segment?.id ?? "none",
              preset: preset?.id ?? "custom",
              outputs: scenario.outputs,
              policyCheck: scenario.policyCheck
            },
            null,
            2
          )}
        </pre>
      ) : null}
    </div>
  );
}

export function DemoRoute({ roles, segments, presets, policyGoal, debug }) {
  const politics = roles.find((entry) => entry.id === "politics");
  const worker = roles.find((entry) => entry.id === "worker");
  const client = roles.find((entry) => entry.id === "client");
  const sag = presets.find((entry) => entry.id === "sag");
  const repressive = presets.find((entry) => entry.id === "repressive");
  const executive = segments.find((entry) => entry.id === "executive");
  const laufhaus = segments.find((entry) => entry.id === "laufhaus");

  const states = [
    {
      title: "Start",
      kind: "start"
    },
    {
      title: "Rolle Politik + SAG-Preset",
      role: politics,
      preset: sag,
      scenario: calculateScenario({
        role: "politics",
        segment: null,
        sliders: sag.sliders,
        policyGoal
      })
    },
    {
      title: "Rolle Politik + repressives Modell",
      role: politics,
      preset: repressive,
      scenario: calculateScenario({
        role: "politics",
        segment: null,
        sliders: repressive.sliders,
        policyGoal
      })
    },
    {
      title: "Rolle Sexarbeiter:in + Laufhaus",
      role: worker,
      segment: laufhaus,
      preset: sag,
      scenario: calculateScenario({
        role: "worker",
        segment: "laufhaus",
        sliders: sag.sliders,
        policyGoal
      })
    },
    {
      title: "Rolle Kund:in + High-End Escort",
      role: client,
      segment: executive,
      preset: sag,
      scenario: calculateScenario({
        role: "client",
        segment: "executive",
        sliders: sag.sliders,
        policyGoal
      })
    }
  ];

  return (
    <section className="space-y-6">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Demo</p>
        <p className="mt-3 text-lg leading-8 text-mist">
          Diese Ansicht zeigt die wichtigsten Zustände der App ohne manuelle Interaktion
          untereinander.
        </p>
      </div>

      {states.map((state) =>
        state.kind === "start" ? (
          <div key={state.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-xl font-semibold text-mist">Start</p>
            <p className="mt-3 text-3xl leading-tight text-mist">
              Dreh an den Rahmenbedingungen - und sieh, was passiert.
            </p>
            <p className="mt-4 text-sm leading-7 text-mist/72">{keyMessage}</p>
          </div>
        ) : (
          <ScenarioCard key={state.title} {...state} debug={debug} />
        )
      )}

      <div className="rounded-[28px] border border-rust/20 bg-rust/10 p-6">
        <p className="text-xl font-semibold text-mist">Zwang / Ausbeutung-Querschnitt</p>
        <p className="mt-3 text-sm leading-7 text-mist/82">{coercionLayer.intro}</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm font-semibold text-mist">Realität</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-mist/72">
              {coercionLayer.reality.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-mist">Was hilft</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-mist/72">
              {coercionLayer.helps.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ScenarioCard
        title="Politisches Fazit"
        role={politics}
        scenario={calculateScenario({
          role: "politics",
          segment: null,
          sliders: sag.sliders,
          policyGoal
        })}
        preset={sag}
        debug={debug}
      />
    </section>
  );
}
