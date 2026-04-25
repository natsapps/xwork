export function ProgressHeader({ step, title, route = "app", debug = false, onNavigate }) {
  const steps = ["Start", "Rolle", "Segment", "Stellschrauben", "Wirkung", "Fazit"];
  const views = [
    { id: "app", label: "Cockpit" },
    { id: "demo", label: "Demo" },
    { id: "content", label: "Content" }
  ];

  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[28px] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <p className="font-display text-xl text-mist">Funktion statt Moral</p>
        {debug ? (
          <span className="rounded-full border border-rust/25 bg-rust/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rust">
            Debug
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => onNavigate?.(view.id)}
            className={`rounded-full px-3 py-2 text-sm transition ${
              route === view.id
                ? "bg-gold/15 text-gold"
                : "border border-white/10 text-mist/60"
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
      <div className="hidden items-center gap-3 md:flex">
        {steps.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                index <= step ? "bg-gold" : "bg-white/15"
              }`}
            />
            <span className={`text-sm ${index === step ? "text-mist" : "text-mist/45"}`}>
              {item}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-mist/60">{title}</p>
    </header>
  );
}
