import { useState } from "react";
import { disclaimer, finalStatement, keyMessage } from "../data/config";
import { ideologyPresets } from "../data/presets";
import { generatePoliticalCopy, getDecisionImpact } from "../lib/simulation";
import { DebugPanel } from "./DebugPanel";

export function ResultScreen({
  role, segment, summary, result, preset, presetSource,
  policyGoal, sliders, debug, onRestart, onBack,
}) {
  const [copied, setCopied] = useState(false);

  const presetLabel =
    preset === "custom"
      ? presetSource ? `Eigene Variante auf Basis von ${presetSource}` : "Eigene Einstellung"
      : ideologyPresets.find((e) => e.id === preset)?.label;

  const copyText = generatePoliticalCopy({ role, result, presetId: preset });
  const decisionImpact = getDecisionImpact(result);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="py-8 space-y-6 mx-auto w-full max-w-3xl">

      {/* ── Kicker ───────────────────────────────────── */}
      <div className="text-center space-y-3">
        <p className="kicker">Schritt 6 — Politisches Fazit</p>
        <h2 className="display-lg">Fazit</h2>
      </div>

      {/* ── Key message ──────────────────────────────── */}
      <div className="card-elevated">
        <p className="body-sm italic">{keyMessage}</p>
      </div>

      {/* ── 4 result metrics ─────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Infrastrukturwirkung", value: result.outputs.infrastructure, color: "var(--sage)" },
          { label: "Verlagerungsrisiko",   value: result.outputs.displacement,   color: "var(--gold)" },
          { label: "Ges. Schaden",         value: result.outputs.damage,         color: "var(--rust)" },
          { label: "Zwangsbekämpfung",     value: result.outputs.coercionControl, color: "var(--teal)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="metric-card">
            <p className="body-xs">{label}</p>
            <p className="metric-value" style={{ color }}>{value}</p>
          </div>
        ))}
      </div>

      {/* ── Summary block ────────────────────────────── */}
      <div className="card space-y-4">
        <div>
          <p className="kicker mb-3">Kontext</p>
          <p className="font-bold text-mist text-lg">
            {role.icon} {role.label}
            {segment && ` · ${segment.label}`}
            {presetLabel && ` · ${presetLabel}`}
          </p>
        </div>

        <p className="body-lead">{summary}</p>

        <div className="card-elevated">
          <p className="body-sm">{result.roleResultFrame}</p>
        </div>

        <div className="card-elevated">
          <p className="body-sm font-semibold text-mist">{result.recommendation}</p>
        </div>

        {policyGoal && (
          <div className="card-gold">
            <p className="text-sm font-bold text-mist">
              Politisches Ziel: {policyGoal.label}
              <span className="ml-2 font-normal" style={{ color: "var(--gold)" }}>
                Ziel-Fit: {result.goalFit.score}
              </span>
            </p>
            <p className="body-sm mt-1">{result.goalFit.resultLens}</p>
          </div>
        )}
      </div>

      {/* ── Decision impact ───────────────────────────── */}
      {decisionImpact?.length > 0 && (
        <div className="card space-y-3">
          <p className="kicker mb-2">Entscheidungswirkung</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {decisionImpact.map((item) => (
              <div key={item.id} className={item.positive ? "card-sage" : "card-rust"}>
                <p className="text-sm font-semibold text-mist">{item.label}</p>
                <p className="body-xs mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Copy / share ─────────────────────────────── */}
      <div className="card space-y-3">
        <p className="kicker-teal mb-2">Teilen</p>
        <p className="body-sm">Kurzfassung für Politik, Medien oder Verbände.</p>
        <div className="card-elevated">
          <p className="body-sm whitespace-pre-wrap text-mist/70">{copyText}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="btn-ghost"
        >
          {copied ? "✓ Kopiert" : "Fazit kopieren"}
        </button>
      </div>

      {/* ── Final statement ──────────────────────────── */}
      <div className="card-elevated text-center">
        <p className="body-sm italic text-mist/60">{finalStatement}</p>
      </div>

      {/* ── Disclaimer ───────────────────────────────── */}
      <p className="body-xs text-center px-4">{disclaimer}</p>

      {debug && (
        <DebugPanel
          title="Debug"
          items={[
            { label: "Rolle", value: role.id },
            { label: "Preset", value: preset },
            { label: "Sliders", value: sliders },
            { label: "Outputs", value: result.outputs },
          ]}
        />
      )}

      {/* ── Actions ──────────────────────────────────── */}
      <div className="btn-row justify-center">
        <button type="button" onClick={onBack} className="btn-ghost">← Zurück</button>
        <button type="button" onClick={onRestart} className="btn-primary">
          Neue Simulation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
