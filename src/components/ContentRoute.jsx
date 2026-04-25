import { coercionLayer, comparisonClosing, disclaimer, keyMessage, protectionLawChecklist, sagSourceBox } from "../data/config";
import { ideologyPresets, politicalGoals } from "../data/presets";
import { roleList } from "../data/roles";
import { segments } from "../data/segments";

export function ContentRoute({ debug }) {
  return (
    <section className="space-y-6">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Content Review</p>
        <p className="mt-3 text-sm leading-7 text-mist/72">
          Diese Ansicht zeigt alle zentralen Inhalte aus Rollen, Segmenten, Presets und
          Querschnittsthemen direkt sichtbar und ohne Hover.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xl font-semibold text-mist">Rollen</p>
        {roleList.map((role) => (
          <div key={role.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold text-mist">{role.icon} {role.label}</p>
            <p className="mt-2 text-sm leading-7 text-mist/72">{role.question}</p>
            <p className="mt-2 text-sm leading-7 text-mist/66">{role.intro}</p>
            <p className="mt-2 text-sm leading-7 text-mist/66">{role.resultLead}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-xl font-semibold text-mist">Politische Ziele</p>
        {politicalGoals.map((goal) => (
          <div key={goal.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold text-mist">{goal.label}</p>
            <p className="mt-2 text-sm leading-7 text-mist/72">{goal.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-xl font-semibold text-mist">Politische Presets</p>
        {ideologyPresets.map((preset) => (
          <div key={preset.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold text-mist">{preset.label}</p>
            <p className="mt-2 text-sm leading-7 text-mist/72">{preset.description}</p>
            <pre className="mt-3 whitespace-pre-wrap rounded-[18px] border border-white/10 bg-black/25 p-4 text-xs leading-6 text-mist/72">
              {JSON.stringify(preset.sliders, null, 2)}
            </pre>
            <p className="mt-3 text-sm leading-7 text-mist/72">{preset.evaluation}</p>
            {preset.explanation ? (
              <p className="mt-3 text-sm leading-7 text-mist/66">{preset.explanation}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-xl font-semibold text-mist">Segmente</p>
        {segments.map((segment) => (
          <div key={segment.id} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold text-mist">{segment.label}</p>
            <p className="mt-2 text-sm leading-7 text-mist/66">{segment.summary}</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-mist">Bedarf</p>
                <p className="mt-2 text-sm leading-7 text-mist/72">{segment.need}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-mist">Wirkung für die Person</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-mist/72">
                  {segment.personEffect.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-mist">Gesellschaftliche Funktion</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-mist/72">
                  {segment.socialFunction.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-mist">Wegfall</p>
                <ul className="mt-2 space-y-2 text-sm leading-7 text-mist/72">
                  {segment.absence.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-mist">Skills</p>
                <div className="mt-2 space-y-3">
                  {segment.skills.map((skill) => (
                    <div key={skill.task} className="rounded-[18px] border border-white/10 bg-black/25 p-4">
                      <p className="text-sm font-semibold text-mist">{skill.task}</p>
                      <p className="mt-2 text-sm leading-7 text-mist/72">{skill.explanation}</p>
                      <p className="mt-2 text-sm leading-7 text-mist/66">{skill.challenge}</p>
                      <p className="mt-2 text-sm leading-7 text-rust/90">{skill.missing}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[24px] border border-rust/20 bg-rust/10 p-5">
        <p className="text-lg font-semibold text-mist">Querschnittsthemen</p>
        <p className="mt-3 text-sm leading-7 text-mist/84">{coercionLayer.intro}</p>
        <div className="mt-4 space-y-4 text-sm leading-7 text-mist/72">
          <div>
            <p className="font-semibold text-mist">Realität</p>
            {coercionLayer.reality.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-mist">Warum es schwer sichtbar ist</p>
            {coercionLayer.hardToSee.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-mist">Was hilft</p>
            {coercionLayer.helps.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-mist">Was schadet</p>
            {coercionLayer.harms.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
          <div>
            <p className="font-semibold text-mist">Weitere Texte</p>
            <p>{sagSourceBox}</p>
            <p className="mt-2">{comparisonClosing}</p>
            <p className="mt-2">{keyMessage}</p>
            <p className="mt-2">{disclaimer}</p>
            <div className="mt-2">
              {protectionLawChecklist.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {debug ? (
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-mist/72">
          Debug-Modus aktiv. Diese Route ist bereits vollständig sichtbar und benötigt keine
          Hover-Zustände.
        </div>
      ) : null}
    </section>
  );
}
