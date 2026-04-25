import { roleList } from "../data/roles.js";
import { segmentMap } from "../data/segments.js";

const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

const roleEffects = {
  politics:
    "Welche Entscheidungen schaffen Schutz, Sichtbarkeit und Kontrolle - und welche verschieben Risiken nur in den Untergrund?",
  journalism:
    "Welche Darstellung macht Realität sichtbar, ohne zu stigmatisieren oder zu verharmlosen?",
  worker:
    "Wie verändern sich Sicherheit, Sichtbarkeit, Arbeitsbedingungen und Handlungsspielräume praktisch?",
  client:
    "Wie verändern sich Zugang, Verhalten und Ausweichbewegungen unter diesen Rahmenbedingungen?",
  society:
    "Welche gesellschaftlichen Funktionen bleiben bearbeitbar - und was passiert, wenn diese Infrastruktur fehlt?"
};

const roleResultFrames = {
  politics:
    "Gute Politik reduziert Probleme, ohne neue zu erzeugen. Entscheidend ist, ob Zwang sichtbarer, Betroffene erreichbarer und selbstbestimmte Arbeit sicherer wird.",
  journalism:
    "Journalismus wirkt politisch. Wer Zusammenhänge sichtbar macht, verbessert Debattenqualität; wer nur skandalisiert, verstärkt Blindstellen.",
  worker:
    "Für Sexarbeiter:innen zählt, ob Schutz, Anonymität, Sichtbarkeit und reale Handlungsräume im Alltag besser oder schlechter werden.",
  client:
    "Für Kund:innen verändert sich nicht nur der Zugang, sondern auch, ob Verhalten in sichere Kontexte gelenkt oder in Graubereiche verschoben wird.",
  society:
    "Gesellschaftlich zählt, ob Funktionen sichtbar, erreichbar und regulierbar bleiben - oder ob Probleme nur an andere Stellen verschoben werden."
};

function getBaseWeights(profile) {
  return {
    prohibition: profile?.weights?.prohibition ?? 1,
    regulation: profile?.weights?.regulation ?? 1,
    stigma: profile?.weights?.stigma ?? 1,
    infrastructure: profile?.weights?.infrastructure ?? 1,
    underground: profile?.weights?.underground ?? 1,
    displacement: profile?.weights?.displacement ?? 1
  };
}

function getCompass(outputs) {
  const items = [
    {
      id: "coercionVisible",
      question: "Wird Zwang besser erkennbar?",
      positive: outputs.coercionControl >= 58
    },
    {
      id: "reachable",
      question: "Werden Betroffene besser erreichbar?",
      positive: outputs.access >= 58
    },
    {
      id: "selfDirectedSafe",
      question: "Werden selbstbestimmte Sexarbeiter:innen sicherer?",
      positive: outputs.selfDetermination >= 58
    },
    {
      id: "displacementDown",
      question: "Sinkt das Verlagerungsrisiko?",
      positive: outputs.displacement <= 44
    }
  ];

  const positives = items.filter((item) => item.positive).length;
  let verdict = "Gemischte Wirkung";

  if (positives === 4) {
    verdict = "Wirksame Schutzpolitik";
  } else if (outputs.prohibition >= 68 && outputs.visibility < 48 && outputs.access < 48) {
    verdict = "Symbolische Härte mit Verlagerungsrisiko";
  } else if (outputs.regulation >= 68 && outputs.anonymity < 46) {
    verdict = "Schutzabsicht mit Rückzugsrisiko";
  } else if (
    outputs.infrastructure >= 68 &&
    outputs.anonymity >= 64 &&
    outputs.enforcement >= 64
  ) {
    verdict = "Hohe Chance auf wirksame Problembekämpfung";
  }

  return { items, verdict };
}

function getRecommendation(result) {
  const { outputs, compass } = result;

  if (compass.verdict === "Wirksame Schutzpolitik") {
    return "Die Kombination stärkt Sichtbarkeit, Zugang, Anonymität und gezielte Ausbeutungsbekämpfung zugleich. Das ist politisch die robusteste Konstellation.";
  }

  if (compass.verdict === "Symbolische Härte mit Verlagerungsrisiko") {
    return "Hoher Strafdruck allein reicht nicht. Ohne Vertrauen, Zugang und Sichtbarkeit sinkt die Bekämpfbarkeit von Zwang trotz harter Signale.";
  }

  if (compass.verdict === "Schutzabsicht mit Rückzugsrisiko") {
    return "Regulierung braucht Identitätsschutz. Wenn Regeln als Outing- oder Registrierungsrisiko erlebt werden, ziehen sich gerade erreichbare Bereiche zurück.";
  }

  if (outputs.coercionControl < 48) {
    return "Gezielte Durchsetzung gegen Ausbeutung braucht mehr Schutzinfrastruktur, mehr Anonymität und mehr Zugang, sonst bleiben Betroffene schwer erreichbar.";
  }

  return "Die Konstellation ist nicht klar schädlich, aber politisch noch nicht robust. Entscheidend wäre, Verlagerungsrisiko weiter zu senken und Zwang besser erkennbar zu machen.";
}

export function calculateScenario({ role, segment, sliders }) {
  const profile = segment ? segmentMap[segment] : null;
  const weights = getBaseWeights(profile);

  const bureaucracyPenalty = clamp(
    sliders.regulation * 0.22 - sliders.anonymity * 0.26,
    0,
    22
  );

  const trust = clamp(
    26 +
      sliders.infrastructure * 0.23 * weights.infrastructure +
      sliders.anonymity * 0.34 -
      sliders.stigma * 0.26 * weights.stigma -
      sliders.prohibition * 0.18 * weights.prohibition -
      bureaucracyPenalty * 0.6
  );

  const access = clamp(
    24 +
      sliders.infrastructure * 0.38 * weights.infrastructure +
      sliders.anonymity * 0.22 +
      trust * 0.18 -
      sliders.prohibition * 0.16 * weights.prohibition -
      sliders.stigma * 0.14 * weights.stigma
  );

  const visibility = clamp(
    30 +
      sliders.regulation * 0.24 * weights.regulation +
      sliders.infrastructure * 0.1 * weights.infrastructure +
      sliders.anonymity * 0.12 +
      trust * 0.18 -
      sliders.prohibition * 0.28 * weights.prohibition -
      sliders.stigma * 0.26 * weights.stigma -
      bureaucracyPenalty * 0.5
  );

  const underground = clamp(
    26 +
      sliders.prohibition * 0.36 * weights.prohibition +
      sliders.stigma * 0.22 * weights.stigma +
      bureaucracyPenalty * 0.55 -
      sliders.regulation * 0.14 * weights.regulation -
      sliders.infrastructure * 0.12 * weights.infrastructure -
      sliders.anonymity * 0.16 +
      weights.underground * 7
  );

  const infrastructureEffect = clamp(
    28 +
      sliders.regulation * 0.27 * weights.regulation +
      sliders.infrastructure * 0.33 * weights.infrastructure +
      sliders.anonymity * 0.12 +
      visibility * 0.12 +
      access * 0.12 -
      sliders.prohibition * 0.15 * weights.prohibition -
      sliders.stigma * 0.14 * weights.stigma -
      bureaucracyPenalty * 0.45
  );

  const safety = clamp(
    26 +
      infrastructureEffect * 0.28 +
      trust * 0.16 +
      access * 0.12 -
      underground * 0.18 -
      sliders.stigma * 0.08
  );

  const selfDetermination = clamp(
    26 +
      infrastructureEffect * 0.26 +
      sliders.anonymity * 0.22 +
      trust * 0.16 +
      sliders.regulation * 0.1 -
      sliders.prohibition * 0.14 * weights.prohibition -
      bureaucracyPenalty * 0.6 -
      sliders.stigma * 0.12
  );

  const coercionControl = clamp(
    24 +
      sliders.enforcement * 0.26 +
      sliders.infrastructure * 0.24 +
      sliders.anonymity * 0.12 +
      trust * 0.14 +
      access * 0.12 +
      visibility * 0.12 -
      sliders.prohibition * 0.08 -
      underground * 0.16 -
      sliders.stigma * 0.14
  );

  const exploitationRisk = clamp(
    34 +
      underground * 0.2 +
      sliders.stigma * 0.14 +
      sliders.prohibition * 0.08 -
      safety * 0.18 -
      selfDetermination * 0.14 -
      coercionControl * 0.1
  );

  const displacement = clamp(
    28 +
      underground * 0.28 +
      sliders.prohibition * 0.14 * weights.prohibition +
      sliders.stigma * 0.14 * weights.stigma +
      bureaucracyPenalty * 0.35 -
      infrastructureEffect * 0.18 -
      visibility * 0.12 -
      sliders.anonymity * 0.08 +
      weights.displacement * 7
  );

  const damage = clamp(
    28 +
      displacement * 0.24 +
      exploitationRisk * 0.18 +
      underground * 0.12 +
      sliders.stigma * 0.1 -
      safety * 0.14 -
      coercionControl * 0.12 -
      selfDetermination * 0.1
  );

  const outputs = {
    prohibition: sliders.prohibition,
    regulation: sliders.regulation,
    stigma: sliders.stigma,
    infrastructure: Math.round(infrastructureEffect),
    anonymity: sliders.anonymity,
    enforcement: sliders.enforcement,
    displacement: Math.round(displacement),
    damage: Math.round(damage),
    safety: Math.round(safety),
    visibility: Math.round(visibility),
    coercionControl: Math.round(coercionControl),
    selfDetermination: Math.round(selfDetermination),
    exploitationRisk: Math.round(exploitationRisk),
    underground: Math.round(underground),
    trust: Math.round(trust),
    access: Math.round(access)
  };

  const compass = getCompass(outputs);

  const chain = [
    {
      label: "Politische Entscheidung",
      shortLabel: "Rahmen",
      value:
        (sliders.prohibition +
          sliders.regulation +
          sliders.infrastructure +
          sliders.anonymity +
          sliders.enforcement) /
        5,
      tone: "warn"
    },
    {
      label: "Sichtbarkeit / Vertrauen / Zugang",
      shortLabel: "Zugang",
      value: (outputs.visibility + outputs.trust + outputs.access) / 3,
      tone: outputs.access >= 55 ? "good" : "warn"
    },
    {
      label: "Infrastrukturwirkung",
      shortLabel: "Infra",
      value: outputs.infrastructure,
      tone: outputs.infrastructure >= 55 ? "good" : "warn"
    },
    {
      label: "Zwang bekämpfbar",
      shortLabel: "Zwang",
      value: outputs.coercionControl,
      tone: outputs.coercionControl >= 55 ? "good" : "danger"
    },
    {
      label: "Gesellschaftlicher Schaden",
      shortLabel: "Schaden",
      value: outputs.damage,
      tone: "danger"
    }
  ];

  const result = {
    role,
    segment,
    profile,
    outputs,
    chain,
    interpretation: roleEffects[role],
    roleResultFrame: roleResultFrames[role],
    compass
  };

  return {
    ...result,
    recommendation: getRecommendation(result)
  };
}

export function getPerspectiveShift({ role, result }) {
  const { visibility, displacement, selfDetermination, coercionControl } = result.outputs;

  const statements = {
    politics:
      coercionControl >= 58
        ? "Die Maßnahme macht Zwang eher erkennbar und politisch bearbeitbar."
        : "Die Maßnahme setzt Signale, macht Betroffene aber noch nicht zuverlässig erreichbar.",
    journalism:
      visibility >= 58
        ? "Die Darstellung hält Realität eher sichtbar und differenzierbar."
        : "Die Darstellung verstärkt eher Blindstellen, Heimlichkeit oder moralische Reflexe.",
    worker:
      selfDetermination >= 58
        ? "Arbeitsrealität wird eher sicherer und selbstbestimmter."
        : "Arbeitsrealität wird eher riskanter, gedrängter oder bürokratisch verletzlicher.",
    client:
      displacement <= 44
        ? "Verhalten bleibt eher in sicheren, klaren und sichtbaren Rahmen."
        : "Verhalten weicht eher in heimlichere oder riskantere Kontexte aus.",
    society:
      visibility >= 56 && displacement <= 46
        ? "Gesellschaft hält Funktionen eher sichtbar und ansprechbar."
        : "Gesellschaft verliert eher Sichtbarkeit und verschiebt Probleme in andere Systeme."
  };

  return roleList
    .filter((entry) => entry.id !== role)
    .map((entry) => ({
      ...entry,
      text: statements[entry.id]
    }));
}

export function getResultSummary({ result }) {
  const { compass, outputs } = result;

  if (compass.verdict === "Wirksame Schutzpolitik") {
    return "Die aktuelle Kombination erhöht Sichtbarkeit, Schutz und Bekämpfbarkeit von Zwang, ohne selbstbestimmte Arbeit stark in den Untergrund zu drängen.";
  }

  if (compass.verdict === "Symbolische Härte mit Verlagerungsrisiko") {
    return "Die aktuelle Kombination wirkt hart, senkt aber Sichtbarkeit und Zugang. Dadurch steigt das Risiko, dass Ausbeutung schwerer erkennbar wird.";
  }

  if (compass.verdict === "Schutzabsicht mit Rückzugsrisiko") {
    return "Die aktuelle Kombination will Schutz erzeugen, riskiert aber Rückzug, weil Anonymität und Identitätsschutz zu schwach bleiben.";
  }

  if (outputs.coercionControl < 48) {
    return "Die aktuelle Kombination schützt nicht schlecht, macht Zwang aber noch zu wenig erkennbar und Betroffene zu wenig erreichbar.";
  }

  return "Die aktuelle Kombination bleibt gemischt: Ein Teil der Schutzwirkung ist da, aber Verlagerung, Unsicherheit oder mangelnder Zugang bremsen die politische Wirksamkeit.";
}

export function generatePoliticalCopy({ role, result }) {
  const { outputs, compass } = result;

  if (compass.verdict === "Wirksame Schutzpolitik") {
    return "Dieses Szenario erhöht Sichtbarkeit, Schutz und Bekämpfbarkeit von Zwang, ohne selbstbestimmte Sexarbeit stark in den Untergrund zu drängen.";
  }

  if (compass.verdict === "Symbolische Härte mit Verlagerungsrisiko") {
    return "Dieses Szenario wirkt hart, senkt aber Sichtbarkeit und Zugang. Dadurch steigt das Risiko, dass Ausbeutung schwerer erkennbar wird.";
  }

  return `${role.copyLead} Aktuell liegen Infrastrukturwirkung bei ${outputs.infrastructure}, Bekämpfbarkeit von Zwang bei ${outputs.coercionControl} und Verlagerungsrisiko bei ${outputs.displacement}.`;
}
