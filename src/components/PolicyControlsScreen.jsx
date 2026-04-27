import { useState } from "react";
import { comparisonClosing, sagSourceBox, sliderConfig } from "../data/config";
import { DebugPanel } from "./DebugPanel";

function Slider({ config, value, onChange }) {
  return (
    <div className="slider-wrap">
      <div className="flex items-center justify-between gap-2 mb-1">
        <p className="font-semibold text-mist text-sm">{config.label}</p>
        <span
          className="text-sm font-bold tabular-nums"
          style={{ color: "var(--gold)", minWidth: "2.5rem", textAlign: "right" }}
        >
          {value}
        </span>
      </div>
      <p className="body-xs mb-2">{config.description}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        aria-label={config.label}
        onChange={(e) => onChange(config.key, Number(e.target.value))}
      />
    </div>
  );
}

function CompareMetric({ label, value, tone }) {
  const colors = {
    good:   "var(--sage)",
    danger: "var(--rust)",
    accent: "var(--teal)",
    warn:   "var(--gold)",
  };
  return (
    <div className="card-elevated">
      <p className="kicker mb-2">{label}</p>
      <p className="font-bold text-2xl" style={{ color: colors[tone] ?? colors.warn }}>
        {value}
      </p>
    </div>
  );
}

export function PolicyControlsScreen({
  role,
  segment,
  sliders,
  policyGoal,
  policyGoals,
  policyGoalCategories,
  onPolicyGoalChange,
  preset,
  presets,
  onPresetChange,
  onSliderChange,
  presetSource,
  onBack,
  onNext,
  preview,
  comparisonModels,
  segmentComparisons,
  debug,
}) {
  const [showComparison, setShowComparison] = useState(false);
  const [showSegmentCompare, setShowSegmentCompare] = useState(false);
  const activePreset = presets.find((e) => e.id === preset);
  const activeGoal = policyGoals.find((g) => g.id === policyGoal);
  const showGlobal = !segment && ["politics", "journalism", "society"].includes(role.id);

  return (
    <section className="py-8 space-y-6 mx-auto w-full max-w-4xl">

      {/* Context card */}
      <div className="card-gold">
        <p className="kicker mb-3">Schritt 4 — Politischer Kontext</p>
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-mist text-xl">
              {role.icon} {role.label}
            </p>
            <p className="body-sm mt-1">
              {segment ? `Segment: ${segment.label}` : "Ohne Segment – Gesamtsystem"}
            </p>
            <p className="body-sm mt-1">{role.question}</p>
            {segment && <p className="body-xs mt-1">{segment.summary}</p>}
          </div>
        </div>
      </div>

      {/* ── Politisches Ziel ────────────────────────────── */}
      <div className="card space-y-4">
        <div>
          <p className="kicker mb-2">Politisches Ziel wählen</p>
          <p className="body-sm">
            Das Cockpit bewertet danach, welches politische Ziel du priorisierst.
          </p>
        </div>

        {policyGoalCategories.map((cat) => (
          <div key={cat.id}>
            <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-2">
              {cat.label}
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {cat.goals.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => onPolicyGoalChange(goal.id)}
                  className={`goal-btn ${policyGoal === goal.id ? "selected" : ""}`}
                >
                  <p className="font-semibold text-mist text-sm">{goal.label}</p>
                  <p className="body-xs mt-1">{goal.description}</p>
                </button>
              ))}
            </div>
          </div>
        ))}

        {activeGoal && (
          <div className="card-elevated">
            <p className="text-sm font-bold text-mist">Aktives Ziel: {activeGoal.label}</p>
            <p className="body-xs mt-1">
              Unterschiedliche Ziele führen zu unterschiedlichen Bewertungen systemischer Folgen.
            </p>
          </div>
        )}
      </div>

      {/* ── Politisches Modell ──────────────────────────── */}
      <div className="card space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="kicker-teal mb-2">Politisches Modell</p>
            <p className="body-sm">
              Presets setzen die Slider automatisch — du kannst danach jede Stellschraube
              weiter anpassen.
            </p>
          </div>
          {comparisonModels?.length > 0 && (
            <button
              type="button"
              className="btn-ghost text-xs whitespace-nowrap"
              onClick={() => setShowComparison((v) => !v)}
            >
              {showComparison ? "Schließen" : "Vergleichen"}
            </button>
          )}
        </div>

        {/* Preset chips */}
        <div className="flex flex-wrap gap-2">
          {presets.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => onPresetChange(entry.id)}
              className={`preset-btn ${preset === entry.id ? "selected" : ""}`}
            >
              {entry.label}
            </button>
          ))}
        </div>

        {preset === "custom" && presetSource && (
          <p className="body-xs" style={{ color: "var(--gold)" }}>
            Eigene Variante auf Basis von {presetSource}
          </p>
        )}

        {activePreset?.id === "sag" && (
          <div className="card-teal">
            <p className="text-sm font-bold text-mist">{activePreset.explanation}</p>
            <p className="body-xs mt-1">{activePreset.neutralFrame}</p>
          </div>
        )}

        {/* Comparison table */}
        {showComparison && comparisonModels?.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-white/6">
            <p className="body-xs font-bold text-mist/60 uppercase tracking-wider">
              Modellvergleich
            </p>
            {comparisonModels.map((m) => (
              <div key={m.id} className="card-elevated">
                <p className="font-bold text-mist text-sm">{m.label}</p>
                <div className="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-4">
                  <CompareMetric label="Infrastruktur" value={m.scenario.outputs.infrastructure} tone="good" />
                  <CompareMetric label="Verlagerung" value={m.scenario.outputs.displacement} tone="warn" />
                  <CompareMetric label="Zwangsbek." value={m.scenario.outputs.coercionControl} tone="accent" />
                  <CompareMetric label="Schaden" value={m.scenario.outputs.damage} tone="danger" />
                </div>
              </div>
            ))}
            <p className="body-xs italic">{comparisonClosing}</p>
          </div>
        )}
      </div>

      {/* ── Stellschrauben ──────────────────────────────── */}
      <div className="card space-y-4">
        <p className="kicker">Politische Stellschrauben</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {sliderConfig.map((cfg) => (
            <Slider key={cfg.key} config={cfg} value={sliders[cfg.key]} onChange={onSliderChange} />
          ))}
        </div>
      </div>

      {/* ── Live-Vorschau ───────────────────────────────── */}
      <div className="card space-y-4">
        <p className="kicker-teal">Live-Vorschau</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <CompareMetric label="Infrastrukturwirkung" value={preview.outputs.infrastructure} tone="good" />
          <CompareMetric label="Verlagerungsrisiko"   value={preview.outputs.displacement}   tone="warn" />
          <CompareMetric label="Zwangsbekämpfung"     value={preview.outputs.coercionControl} tone="accent" />
          <CompareMetric label="Ges. Schaden"         value={preview.outputs.damage}          tone="danger" />
        </div>

        <div className="card-elevated">
          <p className="text-sm font-bold text-mist">
            Ziel-Fit: {preview.goalFit.label}{" "}
            <span style={{ color: "var(--gold)" }}>({preview.goalFit.score})</span>
          </p>
          <p className="body-xs mt-1">{preview.goalFit.text}</p>
        </div>

        {/* Policy Check */}
        <div>
          <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-2">Policy-Check</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {preview.policyCheck.items.map((item) => (
              <div
                key={item.id}
                className={item.positive ? "card-sage" : "card-rust"}
              >
                <div className="flex items-start gap-2">
                  <span className="text-base mt-0.5">{item.positive ? "✓" : "✗"}</span>
                  <div>
                    <p className="text-sm font-semibold text-mist">{item.question}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="body-sm mt-3 font-semibold text-mist">{preview.policyCheck.verdict}</p>
        </div>
      </div>

      {/* ── Segment-Vergleich (nur für system-weite Rollen) */}
      {showGlobal && (
        <div className="card space-y-4">
          <button
            type="button"
            className="disclosure-btn"
            onClick={() => setShowSegmentCompare((v) => !v)}
          >
            <div>
              <p className="kicker mb-1">Segmentübergreifende Wirkung</p>
              <p className="body-sm">
                Wie wirkt diese Kombination auf verschiedene Felder?
              </p>
            </div>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className={`text-mist/40 transition-transform duration-200 ${showSegmentCompare ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {showSegmentCompare && (
            <div className="space-y-3 pt-2">
              {segmentComparisons.map((entry) => (
                <div key={entry.id} className="card-elevated space-y-2">
                  <p className="font-bold text-mist text-sm">{entry.label}</p>
                  <p className="body-xs">{entry.summary}</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <CompareMetric label="Infrastruktur" value={entry.scenario.outputs.infrastructure} tone="good" />
                    <CompareMetric label="Verlagerung"   value={entry.scenario.outputs.displacement}   tone="warn" />
                    <CompareMetric label="Zwangsbek."    value={entry.scenario.outputs.coercionControl} tone="accent" />
                    <CompareMetric label="Schaden"       value={entry.scenario.outputs.damage}          tone="danger" />
                  </div>
                  {entry.segmentGoalFit && (
                    <p className="body-xs font-medium" style={{ color: "var(--gold)" }}>
                      Ziel-Fit: {entry.segmentGoalFit.label} ({entry.segmentGoalFit.score})
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {debug && <DebugPanel sliders={sliders} preview={preview} />}

      {/* Actions */}
      <div className="btn-row justify-center">
        <button type="button" onClick={onBack} className="btn-ghost">← Zurück</button>
        <button type="button" onClick={onNext} className="btn-primary">
          Simulation berechnen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
