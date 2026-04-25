export function DebugPanel({ title = "Debug", items }) {
  return (
    <div className="rounded-[24px] border border-rust/20 bg-rust/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rust">{title}</p>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-[18px] border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-semibold text-mist">{item.label}</p>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words text-xs leading-6 text-mist/72">
              {typeof item.value === "string" ? item.value : JSON.stringify(item.value, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
