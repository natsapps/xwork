import { useState } from "react";
import { disclaimer, finalStatement, keyMessage } from "../data/config";
import { generatePoliticalCopy } from "../lib/simulation";

export function ResultScreen({ role, segment, summary, result, onRestart, onBack }) {
  const [copied, setCopied] = useState(false);
  const copyText = generatePoliticalCopy({ role, result });

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
    <section className="flex min-h-[78vh] items-center justify-center">
      <div className="w-full max-w-5xl space-y-6 rounded-[38px] border border-white/10 bg-black/20 p-8 shadow-glow">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Step 6</p>
        <h2 className="font-display text-4xl text-mist sm:text-5xl">Politisches Fazit</h2>
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-mist/76">
          {keyMessage}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] border border-emerald-300/20 bg-emerald-300/10 p-5">
            <p className="text-sm text-mist/68">Infrastrukturwirkung</p>
            <p className="mt-3 text-5xl font-semibold text-emerald-300">
              {result.outputs.infrastructure}
            </p>
          </div>
          <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-5">
            <p className="text-sm text-mist/68">Verlagerungsrisiko</p>
            <p className="mt-3 text-5xl font-semibold text-gold">{result.outputs.displacement}</p>
          </div>
          <div className="rounded-[24px] border border-rust/20 bg-rust/10 p-5">
            <p className="text-sm text-mist/68">Gesellschaftlicher Schaden</p>
            <p className="mt-3 text-5xl font-semibold text-rust">{result.outputs.damage}</p>
          </div>
          <div className="rounded-[24px] border border-teal/20 bg-teal/10 p-5">
            <p className="text-sm text-mist/68">Bekämpfbarkeit von Zwang</p>
            <p className="mt-3 text-5xl font-semibold text-teal">{result.outputs.coercionControl}</p>
          </div>
        </div>
        <div className="rounded-[30px] border border-gold/20 bg-gold/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Kontext</p>
          <p className="mt-3 text-lg text-mist">
            {role.icon} {role.label}
            {segment ? ` · ${segment.label}` : ""}
          </p>
          <p className="mt-4 text-2xl leading-9 text-mist">{summary}</p>
          <p className="mt-4 text-sm leading-7 text-mist/76">{result.roleResultFrame}</p>
          <p className="mt-4 text-sm leading-7 text-mist/84">{result.recommendation}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-mist"
            >
              Politisches Fazit kopieren
            </button>
            <span className="self-center text-sm text-mist/60">
              {copied ? "Kopiert." : "Kurzfassung für Politik, Medien oder Verbände."}
            </span>
          </div>
        </div>
        {segment ? (
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              Segment-Fazit
            </p>
            <p className="mt-3 text-lg leading-8 text-mist">{segment.summary}</p>
            <p className="mt-4 text-sm leading-7 text-mist/72">
              Wenn diese Infrastruktur fehlt, verschwindet der Bedarf nicht. Er verlagert
              sich in weniger sichtbare und weniger kontrollierbare Räume.
            </p>
          </div>
        ) : null}
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-mist/74">
          {disclaimer}
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-base leading-8 text-mist/84">
          {finalStatement}
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-mist"
          >
            Zurück zur Simulation
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink"
          >
            Neu starten
          </button>
        </div>
      </div>
    </section>
  );
}
