export function StartScreen({ onStart }) {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-8">

        {/* Kicker */}
        <p className="kicker">Interaktiver Wirkungs-Simulator</p>

        {/* Headline */}
        <h1 className="display-xl">
          Dreh an den Rahmenbedingungen —{" "}
          <span className="text-gold">sieh, was passiert.</span>
        </h1>

        {/* Lead */}
        <p className="body-lead mx-auto">
          Dieser Simulator zeigt, wie Verbot, Stigma, Regulierung, Schutz und
          Anonymität auf Sicherheit, Sichtbarkeit, Ausbeutung und gesellschaftliche
          Funktionen von Sexarbeit wirken.
        </p>

        {/* Divider statement */}
        <div className="card-elevated mx-auto max-w-xl text-left space-y-3">
          <p className="body-sm">
            Sexarbeit ist soziale Infrastruktur. Infrastruktur merkt man oft erst,
            wenn sie fehlt.
          </p>
          <p className="body-xs">
            Das Ziel ist nicht, Sexarbeit schönzureden. Das Ziel ist, Zwang und
            Ausbeutung wirksam zu bekämpfen – ohne selbstbestimmte Bereiche
            unsichtbar oder unsicher zu machen.
          </p>
        </div>

        {/* CTA */}
        <div>
          <button type="button" onClick={onStart} className="btn-primary">
            Simulation starten
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
