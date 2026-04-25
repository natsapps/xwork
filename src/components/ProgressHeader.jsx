import { useRef } from "react";

export function ProgressHeader({
  step,
  title,
  route = "app",
  debug = false,
  onNavigate,
  buildMeta
}) {
  const steps = ["Start", "Rolle", "Segment", "Stellschrauben", "Wirkung", "Fazit"];
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef(null);

  const handleTitleClick = () => {
    clickCountRef.current += 1;

    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      onNavigate?.("demo");
      return;
    }

    clickTimeoutRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
    }, 1200);
  };

  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[28px] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleTitleClick}
          className="font-display text-left text-xl text-mist"
        >
          Funktion statt Moral
        </button>
        {debug ? (
          <span className="rounded-full border border-rust/25 bg-rust/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-rust">
            Debug
          </span>
        ) : null}
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
      <div className="text-right">
        <p className="text-sm text-mist/60">{title}</p>
        {buildMeta ? (
          <p className="mt-1 text-xs text-mist/40">
            Build {buildMeta.commit}
          </p>
        ) : null}
      </div>
    </header>
  );
}
