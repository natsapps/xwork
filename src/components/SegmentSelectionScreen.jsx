import { useState } from "react";

export function SegmentSelectionScreen({
  segments,
  selectedSegment,
  onSelectSegment,
  onBack,
  onNext,
  roleLabel,
  canSkip,
}) {
  const activeSegment = segments.find((s) => s.id === selectedSegment);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-8">
      <div className="mx-auto w-full max-w-4xl space-y-8">

        {/* Header */}
        <div className="space-y-3 text-center">
          <p className="kicker">Schritt 3 von 6</p>
          <h2 className="display-lg">Welcher Kontext?</h2>
          <p className="body-lead mx-auto text-center">
            <span className="text-mist font-semibold">{roleLabel}</span> — In welchem
            realen Feld wirken Bedürfnisse, Schutz und Risiken?
          </p>
          {canSkip && (
            <p className="body-xs mx-auto max-w-lg">
              Für {roleLabel} ist ein Segment kein Muss. Du kannst auf das
              Gesamtsystem schauen oder spezifische Felder vergleichen.
            </p>
          )}
        </div>

        {/* Segment grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {canSkip && (
            <button
              type="button"
              onClick={() => onSelectSegment(null)}
              className={`select-card ${selectedSegment === null ? "selected" : ""}`}
            >
              <p className="font-bold text-mist text-base">Gesamtsystem</p>
              <p className="body-xs mt-1.5">
                Übergreifende Systemlogik ohne spezifischen Kontext.
              </p>
            </button>
          )}
          {segments.map((seg) => (
            <button
              key={seg.id}
              type="button"
              onClick={() => onSelectSegment(seg.id)}
              className={`select-card ${selectedSegment === seg.id ? "selected" : ""}`}
            >
              <p className="font-bold text-mist text-base">{seg.label}</p>
              <p className="body-xs mt-1.5">{seg.summary}</p>
            </button>
          ))}
        </div>

        {/* Segment detail — collapsible */}
        {activeSegment && (
          <div className="card-gold space-y-3">
            <button
              type="button"
              className="disclosure-btn"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              <div>
                <p className="kicker mb-1">Segmentstruktur</p>
                <p className="font-bold text-mist">{activeSegment.label}</p>
              </div>
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`text-mist/50 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {expanded && (
              <div className="grid gap-2 sm:grid-cols-3 mt-2">
                {[
                  { label: "Bedarf", content: activeSegment.need },
                  { label: "Wirkung für die Person", content: activeSegment.personEffect?.join(", ") },
                  { label: "Bei Wegfall", content: activeSegment.absence?.join(" · ") },
                ].map(({ label, content }) => (
                  <div key={label} className="card-elevated">
                    <p className="text-xs font-bold text-mist/50 uppercase tracking-wider mb-1.5">{label}</p>
                    <p className="body-xs text-mist/70">{content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="btn-row justify-center">
          <button type="button" onClick={onBack} className="btn-ghost">
            ← Zurück
          </button>
          <button type="button" onClick={onNext} className="btn-primary">
            Weiter
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
