import { useRef } from "react";

export function ProgressHeader({ step, title, route = "app", debug = false, onNavigate, buildMeta }) {
  const steps = ["Start", "Rolle", "Segment", "Stellschrauben", "Wirkung", "Fazit"];
  const clickCountRef = useRef(0);
  const clickTimeoutRef = useRef(null);

  const handleTitleClick = () => {
    clickCountRef.current += 1;
    if (clickTimeoutRef.current) window.clearTimeout(clickTimeoutRef.current);
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      onNavigate?.("demo");
      return;
    }
    clickTimeoutRef.current = window.setTimeout(() => { clickCountRef.current = 0; }, 1200);
  };

  return (
    <header className="app-header">
      {/* Brand */}
      <button type="button" onClick={handleTitleClick} className="header-brand">
        Funktion statt Moral
      </button>

      {/* Progress dots + labels */}
      <nav className="header-progress" aria-label="Fortschritt">
        {steps.map((label, idx) => (
          <div key={label} className="flex items-center gap-1.5">
            {idx > 0 && <div className="progress-divider" />}
            <div
              className={`progress-step ${idx === step ? "active" : idx < step ? "done" : ""}`}
            >
              <div className={`progress-dot ${idx === step ? "active" : idx < step ? "done" : ""}`} />
              <span>{label}</span>
            </div>
          </div>
        ))}
      </nav>

      {/* Right slot: context title only (no build ID for users) */}
      <div className="hidden sm:block text-right min-w-[80px]">
        {title && (
          <p className="text-xs text-mist/40 font-medium">{title}</p>
        )}
        {debug && (
          <span className="inline-block mt-1 rounded-full border border-rust/25 bg-rust/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-rust">
            Debug
          </span>
        )}
      </div>
    </header>
  );
}
