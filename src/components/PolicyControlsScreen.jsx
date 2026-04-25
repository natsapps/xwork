import { useState } from "react";
import { comparisonClosing, sagSourceBox, sliderConfig } from "../data/config";

function Slider({ config, value, onChange }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-semibold text-mist">{config.label}</p>
        <span className="text-sm font-semibold text-gold">{value}</span>
      </div>
      <p className="mb-4 text-sm leading-6 text-mist/60">{config.description}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(config.key, Number(event.target.value))}
        className="range-accent h-2 w-full cursor-pointer rounded-full bg-white/10"
      />
    </div>
  );
}

function CompareMetric({ label, value, tone }) {
  const toneClass =
    tone === "good"
      ? "text-emerald-300"
      : tone === "danger"
        ? "text-rust"
        : tone === "accent"
          ? "text-teal"
          : "text-gold";

  return (
    <div className="rounded-[18px] border border-white/10 bg-black/25 p-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${toneClass}`}>{value}</p>
    </div>
  );
}

export function PolicyControlsScreen({
  role,
  segment,
  sliders,
  preset,
  presets,
  onPresetChange,
  onSliderChange,
  presetSource,
  onBack,
  onNext,
  preview,
  comparisonModels
}) {
  const [showComparison, setShowComparison] = useState(false);
  const activePreset = presets.find((entry) => entry.id === preset);

  return (
    <section className="space-y-6">
      <div className="space-y-5 rounded-[34px] border border-white/10 bg-black/20 p-4 sm:p-6">
        <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Politischer Kontext
          </p>
          <p className="mt-3 text-2xl font-semibold text-mist">
            {role.icon} {role.label}
          </p>
          <p className="mt-2 text-sm leading-7 text-mist/72">
            {segment ? `Segment: ${segment.label}` : "Ohne Segment: Fokus auf das Gesamtsystem."}
          </p>
          <p className="mt-3 text-sm leading-7 text-mist/72">{role.question}</p>
          {segment ? (
            <p className="mt-3 text-sm leading-7 text-mist/72">{segment.summary}</p>
          ) : null}
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                Politisches Modell wählen
              </p>
              <p className="mt-3 text-sm leading-7 text-mist/72">
                Presets setzen die Slider automatisch, ersetzen sie aber nicht. Danach kannst du
                jede Stellschraube weiter anpassen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowComparison((current) => !current)}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-mist"
            >
              {showComparison ? "Vergleich ausblenden" : "Modelle vergleichen"}
            </button>
          </div>

          <div className="mt-4 grid gap-3 xl:grid-cols-2">
            {presets.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => onPresetChange(entry.id)}
                className={`rounded-[18px] border p-4 text-left transition ${
                  preset === entry.id
                    ? "border-gold bg-gold/10"
                    : "border-white/10 bg-black/25 hover:border-white/20"
                }`}
              >
                <p className="font-semibold text-mist">{entry.label}</p>
                <p className="mt-2 text-sm leading-6 text-mist/66">{entry.description}</p>
              </button>
            ))}
          </div>

          {preset === "custom" && presetSource ? (
            <p className="mt-4 text-sm leading-7 text-gold">
              Eigene Variante auf Basis von {presetSource}
            </p>
          ) : null}

          {activePreset?.id === "sag" ? (
            <div className="mt-4 rounded-[18px] border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-sm font-semibold text-mist">{activePreset.explanation}</p>
              <p className="mt-2 text-sm leading-7 text-mist/72">{activePreset.neutralFrame}</p>
            </div>
          ) : null}
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Politische Stellschrauben
          </p>
          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            {sliderConfig.map((config) => (
              <Slider
                key={config.key}
                config={config}
                value={sliders[config.key]}
                onChange={onSliderChange}
              />
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Sofortige Vorschau
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <CompareMetric
              label="Infrastrukturwirkung"
              value={preview.outputs.infrastructure}
              tone="good"
            />
            <CompareMetric
              label="Verlagerungsrisiko"
              value={preview.outputs.displacement}
              tone="warn"
            />
            <CompareMetric
              label="Bekämpfbarkeit von Zwang"
              value={preview.outputs.coercionControl}
              tone="accent"
            />
            <CompareMetric
              label="Gesellschaftlicher Schaden"
              value={preview.outputs.damage}
              tone="danger"
            />
          </div>
          <p className="mt-4 text-sm leading-7 text-mist/72">
            Gute Politik reduziert Probleme, ohne neue zu erzeugen. Drehe an den
            Rahmenbedingungen und prüfe im nächsten Schritt, was mit Sichtbarkeit, Zugang,
            Zwangsbekämpfung und gesellschaftlichem Schaden passiert.
          </p>
        </div>
      </div>

      {showComparison ? (
        <div className="space-y-5 rounded-[34px] border border-white/10 bg-black/20 p-4 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Modelle vergleichen
          </p>

          <div className="space-y-4">
            {comparisonModels.map((model) => (
              <div key={model.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xl font-semibold text-mist">{model.label}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                  <CompareMetric
                    label="Infrastrukturwirkung"
                    value={model.scenario.outputs.infrastructure}
                    tone="good"
                  />
                  <CompareMetric
                    label="Verlagerungsrisiko"
                    value={model.scenario.outputs.displacement}
                    tone="warn"
                  />
                  <CompareMetric
                    label="Bekämpfbarkeit von Zwang"
                    value={model.scenario.outputs.coercionControl}
                    tone="accent"
                  />
                  <CompareMetric
                    label="Schutz selbstbestimmter Arbeit"
                    value={model.scenario.outputs.selfDetermination}
                    tone="default"
                  />
                  <CompareMetric
                    label="Gesellschaftlicher Schaden"
                    value={model.scenario.outputs.damage}
                    tone="danger"
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-mist/72">{model.evaluation}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              SAG-Kontext
            </p>
            <p className="mt-3 text-sm leading-7 text-mist/72">{sagSourceBox}</p>
            <p className="mt-4 text-sm leading-7 text-mist/84">{comparisonClosing}</p>
          </div>
        </div>
      ) : null}

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
          Wirkung sehen
        </button>
      </div>
    </section>
  );
}
