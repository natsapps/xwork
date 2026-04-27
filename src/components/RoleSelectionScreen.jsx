export function RoleSelectionScreen({ roles, activeRole, onSelectRole, onNext }) {
  const selectedRole = roles.find((r) => r.id === activeRole);

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-8">
      <div className="mx-auto w-full max-w-4xl space-y-8">

        {/* Header */}
        <div className="space-y-3 text-center">
          <p className="kicker">Schritt 2 von 6</p>
          <h2 className="display-lg">Aus welcher Perspektive?</h2>
          <p className="body-lead mx-auto text-center">
            Rolle ist Perspektive. Wähle, aus welcher Sicht du auf das System schaust.
          </p>
        </div>

        {/* Role grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => onSelectRole(role.id)}
              className={`select-card ${activeRole === role.id ? "selected" : ""}`}
            >
              <p className="text-2xl mb-3">{role.icon}</p>
              <p className="font-bold text-mist text-base">{role.label}</p>
              <p className="body-xs mt-1.5">{role.question}</p>
            </button>
          ))}
        </div>

        {/* Selected role detail */}
        {selectedRole && (
          <div className="card-gold space-y-2">
            <p className="kicker">Aktive Perspektive</p>
            <p className="font-bold text-mist text-lg mt-2">
              {selectedRole.icon} {selectedRole.label}
            </p>
            <p className="body-sm">{selectedRole.intro}</p>
            {["politics", "journalism", "society"].includes(selectedRole.id) && (
              <p className="text-sm text-gold/90 mt-2 font-medium">
                Diese Perspektive springt direkt zu den politischen Stellschrauben.
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="btn-row justify-center">
          <button
            type="button"
            onClick={onNext}
            disabled={!activeRole}
            className="btn-primary"
          >
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
