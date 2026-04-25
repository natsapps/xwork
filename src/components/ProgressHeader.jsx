export function ProgressHeader({ step, title }) {
  const steps = ["Start", "Rolle", "Segment", "Stellschrauben", "Wirkung", "Fazit"];

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl">
      <p className="font-display text-xl text-mist">Funktion statt Moral</p>
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
