export function RoleSelectionScreen({ roles, activeRole, onSelectRole, onNext }) {
  const selectedRole = roles.find((role) => role.id === activeRole);

  return (
    <section className="flex min-h-[78vh] flex-col justify-center">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Step 2
          </p>
          <h2 className="font-display text-4xl text-mist sm:text-5xl">
            Aus welcher Perspektive willst du schauen?
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-mist/68">
            Rolle ist Perspektive. Segment ist Realität. Du wählst zuerst, aus welcher
            Sicht du auf das System schaust.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              onClick={() => onSelectRole(role.id)}
              className={`rounded-[28px] border p-6 text-left transition ${
                activeRole === role.id
                  ? "border-gold bg-gold/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <p className="text-3xl">{role.icon}</p>
              <p className="mt-4 text-xl font-semibold text-mist">{role.label}</p>
              <p className="mt-3 text-sm leading-7 text-mist/70">{role.question}</p>
            </button>
          ))}
        </div>

        {selectedRole ? (
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Aktive Perspektive
            </p>
            <p className="mt-3 text-2xl font-semibold text-mist">
              {selectedRole.icon} {selectedRole.label}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-mist/72">{selectedRole.intro}</p>
            {["politics", "journalism", "society"].includes(selectedRole.id) ? (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-gold">
                Diese Perspektive springt direkt zu den politischen Stellschrauben. Die
                segmentübergreifende Wirkung siehst du danach im Cockpit.
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onNext}
            disabled={!activeRole}
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-mist disabled:opacity-40"
          >
            Weiter
          </button>
        </div>
      </div>
    </section>
  );
}
