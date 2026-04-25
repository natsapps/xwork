export function SegmentSelectionScreen({
  segments,
  selectedSegment,
  onSelectSegment,
  onBack,
  onNext,
  roleLabel,
  canSkip
}) {
  const activeSegment = segments.find((segment) => segment.id === selectedSegment);

  return (
    <section className="flex min-h-[78vh] flex-col justify-center">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Step 3
          </p>
          <h2 className="font-display text-4xl text-mist sm:text-5xl">Welcher Kontext?</h2>
          <p className="text-sm leading-7 text-mist/68">
            Rolle: {roleLabel}. Segment bedeutet hier: In welchem realen Feld wirken
            Bedürfnisse, Schutz, Risiken und professionelle Anforderungen?
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {canSkip ? (
            <button
              type="button"
              onClick={() => onSelectSegment(null)}
              className={`rounded-[28px] border p-5 text-left transition ${
                selectedSegment === null
                  ? "border-gold bg-gold/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <p className="text-xl font-semibold text-mist">Ohne Segment / Gesamtsystem</p>
              <p className="mt-3 text-sm leading-7 text-mist/70">
                Nutze diese Option, wenn du zuerst auf die allgemeine Systemlogik schauen
                willst und noch keinen konkreten Kontext fokussierst.
              </p>
            </button>
          ) : null}

          {segments.map((segment) => (
            <button
              key={segment.id}
              type="button"
              onClick={() => onSelectSegment(segment.id)}
              className={`rounded-[28px] border p-5 text-left transition ${
                selectedSegment === segment.id
                  ? "border-gold bg-gold/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <p className="text-xl font-semibold text-mist">{segment.label}</p>
              <p className="mt-3 text-sm leading-7 text-mist/70">{segment.summary}</p>
            </button>
          ))}
        </div>

        {activeSegment ? (
          <div className="rounded-[30px] border border-gold/20 bg-gold/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Segmentstruktur
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-5">
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-mist">1. Bedarf</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">{activeSegment.need}</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-mist">2. Wirkung für die Person</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  {activeSegment.personEffect[0]}, {activeSegment.personEffect[1]} und ein
                  klarer, begrenzter Rahmen.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-mist">3. Gesellschaftliche Funktion</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  {activeSegment.socialFunction[0]}.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-mist">4. Wegfall</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  {activeSegment.absence[0]}.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-mist">5. Professionelle Skills</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">
                  {activeSegment.skills[0].task}
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-center gap-3">
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
            disabled={!canSkip && !selectedSegment}
            className="rounded-full bg-mist px-6 py-3 text-sm font-semibold text-ink disabled:opacity-40"
          >
            Stellschrauben einstellen
          </button>
        </div>
      </div>
    </section>
  );
}
