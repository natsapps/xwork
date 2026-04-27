import {
  Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import {
  coercionLayer, disclaimer, infrastructureComparison,
  keyMessage, protectionLawChecklist,
} from "../data/config";
import { DebugPanel } from "./DebugPanel";
import { useState } from "react";

const metricExplanations = [
  { key: "infrastructure",  label: "Infrastrukturwirkung",       text: "Wie gut Bedürfnisse in sichtbaren, regulierbaren und schutzfähigen Räumen bearbeitet werden können." },
  { key: "displacement",    label: "Verlagerungsrisiko",          text: "Wie stark Bedarf in heimlichere und schwer kontrollierbare Räume gedrängt wird." },
  { key: "coercionControl", label: "Bekämpfbarkeit von Zwang",    text: "Wie gut Zwang, Ausbeutung und Täterstrukturen erkennbar, erreichbar und angreifbar werden." },
  { key: "damage",          label: "Gesellschaftlicher Schaden",  text: "Unsichtbarkeit, Verlagerung, Ausbeutungsrisiko und erschwerter Schutz als politischer Risikowert." },
];

function MetricBig({ label, value, color }) {
  return (
    <div className="metric-card">
      <p className="body-xs">{label}</p>
      <p className="metric-value" style={{ color }}>{value}</p>
    </div>
  );
}

function BulletBlock({ title, items, variant = "neutral" }) {
  const bg = variant === "danger" ? "card-rust" : variant === "good" ? "card-sage" : "card-elevated";
  return (
    <div className={bg}>
      <p className="text-sm font-bold text-mist mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="body-xs flex gap-1.5">
            <span className="mt-0.5">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SimulationScreen({
  role, segment, result, policyGoal, preset, sliders,
  onBack, onNext, perspectiveShift, segmentComparisons, debug, summary,
}) {
  const [showCoercion, setShowCoercion] = useState(false);
  const [showSegments, setShowSegments] = useState(false);
  const showGlobal = !segment && ["politics", "journalism", "society"].includes(role.id);
  const roleView = segment?.roleViews?.[role.id];

  const chartData = [
    { key: "Infrastruktur",   value: result.outputs.infrastructure,  fill: "var(--sage)" },
    { key: "Verlagerung",     value: result.outputs.displacement,     fill: "var(--gold)" },
    { key: "Zwangsbek.",      value: result.outputs.coercionControl,  fill: "var(--teal)" },
    { key: "Schaden",         value: result.outputs.damage,           fill: "var(--rust)" },
  ];

  return (
    <section className="py-8 space-y-6 mx-auto w-full max-w-4xl">

      {/* ── Context ──────────────────────────────────── */}
      <div className="card-gold">
        <p className="kicker mb-3">Schritt 5 — Wirkungsanalyse</p>
        <p className="font-bold text-mist text-xl">
          {role.icon} {role.label}
          {segment && <span className="text-mist/60 font-normal text-base"> · {segment.label}</span>}
        </p>
        <p className="body-sm mt-2">{result.interpretation}</p>
        <p className="body-sm mt-1">{result.roleResultFrame}</p>
      </div>

      {/* ── 4 Main Metrics ───────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricBig label="Infrastrukturwirkung" value={result.outputs.infrastructure} color="var(--sage)" />
        <MetricBig label="Verlagerungsrisiko"   value={result.outputs.displacement}   color="var(--gold)" />
        <MetricBig label="Zwangsbekämpfung"     value={result.outputs.coercionControl} color="var(--teal)" />
        <MetricBig label="Ges. Schaden"         value={result.outputs.damage}          color="var(--rust)" />
      </div>

      {/* ── Chart ────────────────────────────────────── */}
      <div className="card">
        <p className="kicker mb-4">Politische Wirkung im Vergleich</p>
        <div className="soft-chart h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 4, right: 4, bottom: 4, left: -20 }}>
              <XAxis dataKey="key" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  background: "var(--shell)",
                  border: "1px solid rgba(240,232,216,0.1)",
                  borderRadius: 12,
                  fontSize: 13,
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {chartData.map((entry) => (
                  <Cell key={entry.key} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ── Secondary metrics ────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Sicherheit",          value: result.outputs.safety,           color: "var(--sage)" },
          { label: "Sichtbarkeit",        value: result.outputs.visibility,       color: "var(--sage)" },
          { label: "Selbstbestimmung",    value: result.outputs.selfDetermination, color: "var(--gold)" },
          { label: "Ausbeutungsrisiko",   value: result.outputs.exploitationRisk,  color: "var(--rust)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="metric-card">
            <p className="body-xs">{label}</p>
            <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          </div>
        ))}
      </div>

      {/* ── Compass ──────────────────────────────────── */}
      <div className="card space-y-3">
        <p className="kicker mb-2">Politischer Kompass</p>
        <p className="display-md">{result.compass.verdict}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {result.compass.items.map((item) => (
            <div key={item.id} className={item.positive ? "card-sage" : "card-rust"}>
              <div className="flex gap-2">
                <span>{item.positive ? "✓" : "✗"}</span>
                <p className="text-sm font-semibold text-mist">{item.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Policy check ─────────────────────────────── */}
      <div className="card space-y-3">
        <p className="kicker mb-2">Policy-Check</p>
        <p className="body-sm">
          Nur wenn mehrere Schutzbedingungen gleichzeitig tragen, gilt ein Modell als wirksame Schutzpolitik.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {result.policyCheck.items.map((item) => (
            <div key={item.id} className={item.positive ? "card-sage" : "card-rust"}>
              <div className="flex gap-2">
                <span className="text-sm">{item.positive ? "✓" : "✗"}</span>
                <p className="body-sm font-semibold text-mist">{item.question}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm font-bold text-mist">{result.policyCheck.verdict}</p>
      </div>

      {/* ── Wirkungsfluss chain ───────────────────────── */}
      <div className="card space-y-3">
        <p className="kicker mb-2">Politischer Wirkungsfluss</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {result.chain.map((item) => (
            <div key={item.label} className="card-elevated flex items-start gap-3">
              <div>
                <p className="body-xs uppercase tracking-wider">{item.label}</p>
                <p
                  className="text-2xl font-bold mt-1"
                  style={{
                    color: item.tone === "good" ? "var(--sage)" : item.tone === "danger" ? "var(--rust)" : "var(--gold)",
                  }}
                >
                  {Math.round(item.value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Infrastructure comparison ─────────────────── */}
      <div className="grid gap-3 sm:grid-cols-2">
        <BulletBlock title="Mit Infrastruktur" items={infrastructureComparison.with} variant="good" />
        <BulletBlock title="Ohne Infrastruktur" items={infrastructureComparison.without} variant="danger" />
      </div>

      {/* ── Protection law checklist ──────────────────── */}
      <div className="card">
        <p className="kicker mb-3">Was Schutzgesetzgebung leisten müsste</p>
        <ul className="space-y-1.5">
          {protectionLawChecklist.map((item) => (
            <li key={item} className="body-sm flex gap-2">
              <span className="text-teal mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Coercion layer (collapsible) ─────────────── */}
      <div className="card">
        <button
          type="button"
          className="disclosure-btn"
          onClick={() => setShowCoercion((v) => !v)}
        >
          <div>
            <p className="kicker mb-1" style={{ color: "var(--rust)" }}>
              {coercionLayer.title}
            </p>
            <p className="body-sm">{coercionLayer.intro.slice(0, 80)}…</p>
          </div>
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            className={`text-mist/40 transition-transform duration-200 flex-shrink-0 ${showCoercion ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        {showCoercion && (
          <div className="mt-4 space-y-3">
            <p className="body-sm">{coercionLayer.intro}</p>
            <BulletBlock title="Realität" items={coercionLayer.reality} />
            <BulletBlock title="Warum schwer sichtbar" items={coercionLayer.hardToSee} />
            <BulletBlock title="Was hilft" items={coercionLayer.helps} variant="good" />
            <BulletBlock title="Was schadet" items={coercionLayer.harms} variant="danger" />
          </div>
        )}
      </div>

      {/* ── Role view (Segment-Sicht) ─────────────────── */}
      {roleView && (
        <div className="card space-y-3">
          <p className="kicker mb-2">Perspektive: {role.label}</p>
          <div className="card-elevated">
            <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-1">Bedarf</p>
            <p className="body-sm">{roleView.need}</p>
          </div>
          <div className="card-elevated">
            <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-1">
              {role.id === "society" ? "Funktion im System" : "Im regulierten System"}
            </p>
            <p className="body-sm">{roleView.regulated ?? roleView.function}</p>
          </div>
          {roleView.relieves && (
            <div className="card-elevated">
              <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-1">Entlastete Systeme</p>
              <p className="body-sm">{roleView.relieves}</p>
            </div>
          )}
          <div className="card-rust">
            <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-1">Bei Verbot / Wegfall</p>
            <p className="body-sm">{roleView.absence}</p>
          </div>
        </div>
      )}

      {/* ── Segment detail ───────────────────────────── */}
      {segment && (
        <div className="card space-y-3">
          <p className="kicker mb-2">Segmentstruktur</p>
          <BulletBlock title="Bedarf" items={[segment.need]} />
          <BulletBlock title="Wirkung für die Person" items={segment.personEffect} variant="good" />
          <BulletBlock title="Gesellschaftliche Funktion" items={segment.socialFunction} variant="good" />
          <BulletBlock title="Bei Wegfall" items={segment.absence} variant="danger" />
          <div className="space-y-2 pt-2">
            <p className="text-xs font-bold text-mist/50 uppercase tracking-wider">Professionelle Skills</p>
            {segment.skills.map((skill) => (
              <div key={skill.task} className="card-elevated space-y-1">
                <p className="text-sm font-bold text-mist">{skill.task}</p>
                <p className="body-xs">{skill.explanation}</p>
                <p className="body-xs text-mist/50">Schwierigkeit: {skill.challenge}</p>
                <p className="body-xs" style={{ color: "var(--rust)" }}>Wenn fehlt: {skill.missing}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Global segment comparison ─────────────────── */}
      {showGlobal && (
        <div className="card">
          <button
            type="button"
            className="disclosure-btn"
            onClick={() => setShowSegments((v) => !v)}
          >
            <div>
              <p className="kicker mb-1">Wirkung je Segment</p>
              <p className="body-sm">Dieselbe Politik wirkt nicht in jedem Feld gleich.</p>
            </div>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              className={`text-mist/40 transition-transform flex-shrink-0 ${showSegments ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {showSegments && (
            <div className="space-y-3 mt-4">
              {segmentComparisons.map((entry) => (
                <div key={entry.id} className="card-elevated space-y-2">
                  <p className="font-bold text-mist text-sm">{entry.label}</p>
                  <p className="body-xs">{entry.summary}</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { l: "Infrastruktur", v: entry.scenario.outputs.infrastructure, c: "var(--sage)" },
                      { l: "Verlagerung",   v: entry.scenario.outputs.displacement,   c: "var(--gold)" },
                      { l: "Zwangsbek.",    v: entry.scenario.outputs.coercionControl, c: "var(--teal)" },
                      { l: "Schaden",       v: entry.scenario.outputs.damage,          c: "var(--rust)" },
                    ].map(({ l, v, c }) => (
                      <div key={l} className="card-elevated">
                        <p className="body-xs">{l}</p>
                        <p className="text-xl font-bold mt-1" style={{ color: c }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Perspective shift ─────────────────────────── */}
      <div className="card space-y-3">
        <p className="kicker-teal mb-2">Was deine Entscheidung für andere bedeutet</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {perspectiveShift.map((item) => (
            <div key={item.id} className="card-elevated">
              <p className="font-bold text-mist text-sm">{item.icon} {item.label}</p>
              <p className="body-xs mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Disclaimer ───────────────────────────────── */}
      <p className="body-xs text-center px-4">{disclaimer}</p>

      {debug && (
        <DebugPanel
          title="Debug"
          items={[
            { label: "Rolle", value: role.id },
            { label: "Segment", value: segment?.id ?? "none" },
            { label: "Preset", value: preset?.id ?? "custom" },
            { label: "Scores", value: result.outputs },
            { label: "Chain", value: result.chain },
          ]}
        />
      )}

      {/* Actions */}
      <div className="btn-row justify-center">
        <button type="button" onClick={onBack} className="btn-ghost">← Zurück</button>
        <button type="button" onClick={onNext} className="btn-primary">
          Politisches Fazit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
