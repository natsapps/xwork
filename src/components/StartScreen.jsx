export function StartScreen({ onStart }) {
  return (
    <section className="flex min-h-[78vh] flex-col items-center justify-center text-center">
      <div className="max-w-4xl space-y-6">
        <h1 className="font-display text-5xl leading-tight text-mist sm:text-6xl lg:text-7xl">
          Dreh an den Rahmenbedingungen - und sieh, was passiert.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-mist/72">
          Dieser Simulator zeigt, wie Verbot, Stigma, Regulierung, Schutz und Anonymität
          auf Sicherheit, Sichtbarkeit, Ausbeutung und gesellschaftliche Funktionen von
          Sexarbeit wirken.
        </p>
        <p className="mx-auto max-w-3xl text-base leading-8 text-mist/62">
          Sexarbeit ist soziale Infrastruktur. Infrastruktur merkt man oft erst, wenn sie
          fehlt.
        </p>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-mist/56">
          Das Ziel ist nicht, Sexarbeit schönzureden. Das Ziel ist, Zwang und Ausbeutung
          wirksam zu bekämpfen - ohne selbstbestimmte Bereiche unsichtbar oder unsicher zu
          machen.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="rounded-full bg-mist px-8 py-4 text-base font-semibold text-ink transition hover:bg-white"
        >
          Simulation starten
        </button>
      </div>
    </section>
  );
}
