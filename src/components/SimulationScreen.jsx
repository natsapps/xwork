import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  coercionLayer,
  disclaimer,
  infrastructureComparison,
  keyMessage,
  protectionLawChecklist
} from "../data/config";

const dominantMetricExplanations = [
  {
    key: "infrastructure",
    label: "Infrastrukturwirkung",
    text: "Misst, wie gut Bedürfnisse in sichtbaren, regulierbaren und schutzfähigen Räumen bearbeitet werden können."
  },
  {
    key: "displacement",
    label: "Verlagerungsrisiko",
    text: "Misst, wie stark Bedarf aus sichtbaren Strukturen in heimlichere und schwer kontrollierbare Räume gedrängt wird."
  },
  {
    key: "coercionControl",
    label: "Bekämpfbarkeit von Zwang",
    text: "Misst, wie gut Zwang, Ausbeutung und Täterstrukturen erkennbar, erreichbar und angreifbar werden."
  },
  {
    key: "damage",
    label: "Gesellschaftlicher Schaden",
    text: "Verdichtet Unsichtbarkeit, Verlagerung, Ausbeutungsrisiko und erschwerten Schutz zu einem politischen Risikowert."
  }
];

const secondaryMetricExplanations = [
  "Sicherheit",
  "Sichtbarkeit",
  "Schutz selbstbestimmter Arbeit",
  "Risiko für Ausbeutung"
];

const infrastructureSteps = [
  "Bedarf",
  "Sexarbeit als soziale Infrastruktur",
  "Wirkung für die Person",
  "Gesellschaftliche Funktion",
  "Wegfall = Verlagerung"
];

function MetricCard({ label, value, tone = "default", large = false }) {
  const tones = {
    danger: "border-rust/20 bg-rust/10",
    good: "border-emerald-300/20 bg-emerald-300/10",
    warn: "border-gold/20 bg-gold/10",
    default: "border-white/10 bg-white/5"
  };

  const textTone =
    tone === "good" ? "text-emerald-300" : tone === "danger" ? "text-rust" : "text-gold";

  return (
    <div className={`rounded-[24px] border p-5 ${tones[tone] ?? tones.default}`}>
      <p className="text-sm text-mist/68">{label}</p>
      <p className={`mt-3 font-semibold ${large ? "text-5xl sm:text-6xl" : "text-4xl"} ${textTone}`}>
        {value}
      </p>
    </div>
  );
}

function BulletList({ title, items, tone = "default" }) {
  const toneClass =
    tone === "danger"
      ? "border-rust/20 bg-rust/10"
      : tone === "good"
        ? "border-emerald-300/20 bg-emerald-300/10"
        : "border-white/10 bg-black/25";

  return (
    <div className={`rounded-[22px] border p-4 ${toneClass}`}>
      <p className="text-sm font-semibold text-mist">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-mist/76">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function FlowStepCard({ index, title, text, isLast = false }) {
  return (
    <div className="relative rounded-[20px] border border-white/10 bg-black/25 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-sm font-semibold text-gold">
          {index}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
            {title}
          </p>
          <p className="mt-2 text-sm leading-7 text-mist/72">{text}</p>
        </div>
      </div>
      {!isLast ? (
        <div className="ml-[18px] mt-3 h-6 w-px bg-white/10" aria-hidden="true" />
      ) : null}
    </div>
  );
}

export function SimulationScreen({
  role,
  segment,
  result,
  onBack,
  onNext,
  perspectiveShift
}) {
  const dominantOutputData = [
    { key: "Infrastrukturwirkung", value: result.outputs.infrastructure, fill: "#7de2c3" },
    { key: "Verlagerungsrisiko", value: result.outputs.displacement, fill: "#d4af6a" },
    { key: "Bekämpfbarkeit von Zwang", value: result.outputs.coercionControl, fill: "#4eb7ad" },
    { key: "Gesellschaftlicher Schaden", value: result.outputs.damage, fill: "#de6b56" }
  ];

  const roleView = segment?.roleViews?.[role.id];

  return (
    <section className="space-y-6">
      <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-mist/76">
        {disclaimer}
      </div>

      <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-mist/76">
        {keyMessage}
      </div>

      <div className="space-y-6">
        <div className="space-y-5 rounded-[34px] border border-white/10 bg-black/20 p-4 sm:p-6">
          <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Wirkungskontext</p>
            <p className="mt-3 text-2xl font-semibold text-mist">
              {role.icon} {role.label}
            </p>
            <p className="mt-2 text-sm leading-7 text-mist/72">
              {segment ? `Segment: ${segment.label}` : "Ohne Segment: Gesamtsystem im Fokus."}
            </p>
            <p className="mt-3 text-sm leading-7 text-mist/72">{result.interpretation}</p>
            <p className="mt-3 text-sm leading-7 text-mist/72">{result.roleResultFrame}</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Politischer Kompass
            </p>
            <p className="mt-3 text-2xl font-semibold text-mist">{result.compass.verdict}</p>
            <div className="mt-4 space-y-3">
              {result.compass.items.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-[18px] border p-4 ${
                    item.positive
                      ? "border-emerald-300/20 bg-emerald-300/10"
                      : "border-rust/20 bg-rust/10"
                  }`}
                >
                  <p className="text-sm font-semibold text-mist">{item.question}</p>
                  <p className="mt-2 text-sm text-mist/72">
                    {item.positive ? "Eher ja" : "Eher nein"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Politischer Wirkungsfluss
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {result.chain.map((item) => (
                <div key={item.label} className="rounded-[18px] border border-white/10 bg-black/25 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                    {item.label}
                  </p>
                  <p
                    className={`mt-2 text-3xl font-semibold ${
                      item.tone === "good"
                        ? "text-emerald-300"
                        : item.tone === "danger"
                          ? "text-rust"
                          : "text-gold"
                    }`}
                  >
                    {Math.round(item.value)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {roleView ? (
            <div className="space-y-4">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-mist">Bedarf</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">{roleView.need}</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-mist">
                  {role.id === "society" ? "Funktion im System" : "Im regulierten System"}
                </p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  {roleView.regulated ?? roleView.function}
                </p>
              </div>
              {roleView.relieves ? (
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-mist">Entlastete Systeme</p>
                  <p className="mt-2 text-sm leading-7 text-mist/72">{roleView.relieves}</p>
                </div>
              ) : null}
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-mist">Bei Verbot / Stigma / Wegfall</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">{roleView.absence}</p>
              </div>
            </div>
          ) : null}

          <div className="space-y-4">
            <div className="rounded-[24px] border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Mit Infrastruktur
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-mist/78">
                {infrastructureComparison.with.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-rust/20 bg-rust/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust">
                Ohne Infrastruktur
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-mist/78">
                {infrastructureComparison.without.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-5 rounded-[34px] border border-white/10 bg-black/20 p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <MetricCard label="Infrastrukturwirkung" value={result.outputs.infrastructure} tone="good" large />
            <MetricCard label="Verlagerungsrisiko" value={result.outputs.displacement} tone="warn" large />
            <MetricCard label="Bekämpfbarkeit von Zwang" value={result.outputs.coercionControl} tone="good" large />
            <MetricCard label="Gesellschaftlicher Schaden" value={result.outputs.damage} tone="danger" large />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <MetricCard label="Sicherheit" value={result.outputs.safety} tone="good" />
            <MetricCard label="Sichtbarkeit" value={result.outputs.visibility} tone="good" />
            <MetricCard
              label="Schutz selbstbestimmter Arbeit"
              value={result.outputs.selfDetermination}
              tone="warn"
            />
            <MetricCard
              label="Risiko für Ausbeutung"
              value={result.outputs.exploitationRisk}
              tone="danger"
            />
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Dominante politische Scores
            </p>
            <div className="mt-4 space-y-4">
              {dominantMetricExplanations.map((item) => (
                <div key={item.key} className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-mist">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-mist/72">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-mist/58">
              Sekundär werden zusätzlich beobachtet: {secondaryMetricExplanations.join(", ")}.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Politische Wirkung im Vergleich
            </p>
            <div className="soft-chart mt-4 h-[270px] sm:h-[310px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dominantOutputData}>
                  <XAxis
                    dataKey="key"
                    tick={{ fill: "#f1eadc", fontSize: 11 }}
                    interval={0}
                    angle={-8}
                    height={58}
                    textAnchor="end"
                  />
                  <YAxis domain={[0, 100]} tick={{ fill: "#f1eadc", fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {dominantOutputData.map((entry) => (
                      <Cell key={entry.key} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Was gute Schutzgesetzgebung leisten müsste
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-mist/76">
              {protectionLawChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-rust/20 bg-rust/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust">
              {coercionLayer.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-mist/84">{coercionLayer.intro}</p>
            <div className="mt-4 space-y-4">
              <BulletList title="Realität" items={coercionLayer.reality} />
              <BulletList title="Warum es schwer sichtbar ist" items={coercionLayer.hardToSee} />
              <BulletList title="Was hilft" items={coercionLayer.helps} tone="good" />
              <BulletList title="Was schadet" items={coercionLayer.harms} tone="danger" />
            </div>
            <p className="mt-4 text-sm leading-7 text-mist/84">
              Man bekämpft Zwang nicht, indem man alles unsichtbar macht. Man bekämpft ihn,
              indem Betroffene erreichbar, geschützt und Täterstrukturen angreifbar werden.
            </p>
          </div>

          {segment ? (
            <>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Segmentstruktur
                </p>
                <div className="mt-4 space-y-3">
                  {infrastructureSteps.map((step, index) => (
                    <FlowStepCard
                      key={step}
                      index={index + 1}
                      title={step}
                      isLast={index === infrastructureSteps.length - 1}
                      text={
                        index === 0
                          ? segment.need
                          : index === 1
                            ? "Der Bedarf wird in einem sichtbaren, professionellen und politisch bearbeitbaren Rahmen gehalten."
                            : index === 2
                              ? segment.personEffect.join(", ")
                              : index === 3
                                ? segment.socialFunction.join(", ")
                                : segment.absence.join(", ")
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <BulletList title="Wirkung für die Person" items={segment.personEffect} />
                <BulletList title="Gesellschaftliche Funktion" items={segment.socialFunction} />
                <BulletList title="Was passiert bei Wegfall" items={segment.absence} tone="danger" />
                <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-mist">Konkrete Skill-Karten</p>
                  <div className="mt-4 space-y-4">
                    {segment.skills.map((skill) => (
                      <div key={skill.task} className="rounded-[18px] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-mist">{skill.task}</p>
                        <p className="mt-2 text-sm leading-7 text-mist/72">{skill.explanation}</p>
                        <p className="mt-2 text-sm leading-7 text-mist/62">
                          Schwierigkeit: {skill.challenge}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-rust/90">
                          Wenn der Skill fehlt: {skill.missing}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Was deine Entscheidung für andere bedeutet
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {perspectiveShift.map((item) => (
                <div key={item.id} className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-mist">
                    {item.icon} {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-mist/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-mist"
        >
          Zurück
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink"
        >
          Politisches Fazit
        </button>
      </div>
    </section>
  );
}
