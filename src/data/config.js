export const sliderConfig = [
  {
    key: "prohibition",
    label: "Verbot / Kriminalisierung",
    description: "Wie stark werden sichtbare und regulierbare Räume durch Strafdruck oder Verdrängung eingeschränkt?"
  },
  {
    key: "regulation",
    label: "Regulierung / Standards",
    description: "Wie stark werden klare Regeln, Mindeststandards und bearbeitbare Strukturen aufgebaut?"
  },
  {
    key: "stigma",
    label: "Stigma",
    description: "Wie stark dominieren Scham, moralische Abwertung und Verdrängung?"
  },
  {
    key: "infrastructure",
    label: "Schutzinfrastruktur",
    description: "Wie gut sind Beratung, sichere Orte, Rechte, Wissen und Erreichbarkeit ausgebaut?"
  },
  {
    key: "anonymity",
    label: "Anonymität / Schutz der Identität",
    description: "Wie gut sind Identitätsschutz, anonyme Kontakte und Schutz vor Outing oder Registrierungsschäden gewährleistet?"
  },
  {
    key: "enforcement",
    label: "Gezielte Durchsetzung gegen Ausbeutung",
    description: "Wie stark wird gezielt gegen Täterstrukturen, Zwang, Menschenhandel und Ausbeutung vorgegangen?"
  }
];

export const defaultSliders = {
  prohibition: 45,
  regulation: 58,
  stigma: 52,
  infrastructure: 54,
  anonymity: 62,
  enforcement: 48
};

export const ideologyPresets = [
  {
    id: "statusQuo",
    label: "Status Quo / ProstSchG",
    description:
      "Schutzabsicht mit Regulierung, aber weiter hohes Stigma, schwache Anonymität und relevante Rückzugsrisiken.",
    sliders: {
      prohibition: 45,
      regulation: 60,
      stigma: 70,
      infrastructure: 45,
      anonymity: 25,
      enforcement: 55
    },
    evaluation:
      "Dieses Modell erzeugt Schutzabsichten, aber auch Rückzugsrisiken durch Anmeldung, Stigma und Datenschutzängste."
  },
  {
    id: "repressive",
    label: "Repressives Modell",
    description:
      "Hoher Verbotsdruck, hohe Stigmatisierung, begrenzte Schutzinfrastruktur und starke Verdrängungsdynamik.",
    sliders: {
      prohibition: 90,
      regulation: 35,
      stigma: 85,
      infrastructure: 35,
      anonymity: 20,
      enforcement: 65
    },
    evaluation:
      "Dieses Modell wirkt nach außen hart, erhöht aber das Risiko von Unsichtbarkeit, Untergrund und erschwertem Zugang zu Hilfe."
  },
  {
    id: "liberal",
    label: "Liberales Minimalmodell",
    description:
      "Wenig Repression und relativ viel Anonymität, aber nur schwache Standards und geringe Schutzinfrastruktur.",
    sliders: {
      prohibition: 10,
      regulation: 20,
      stigma: 40,
      infrastructure: 25,
      anonymity: 70,
      enforcement: 30
    },
    evaluation:
      "Dieses Modell reduziert Repression, bietet aber ohne starke Schutzinfrastruktur zu wenig gezielte Absicherung gegen Ausbeutung."
  },
  {
    id: "sag",
    label: "SAG-Modell",
    description:
      "Rechtebasiertes Szenario mit Entstigmatisierung, hoher Anonymität, Schutzinfrastruktur und gezielter Bekämpfung von Ausbeutung.",
    sliders: {
      prohibition: 10,
      regulation: 75,
      stigma: 20,
      infrastructure: 85,
      anonymity: 90,
      enforcement: 80
    },
    evaluation:
      "Dieses Modell setzt auf Rechte, Anonymität, sichere Arbeitsorte, Beratung und gezielte Bekämpfung von Ausbeutung. Dadurch steigt die Chance, Probleme sichtbar und bearbeitbar zu machen.",
    explanation:
      "Das SAG-Modell basiert auf einem community-basierten Ansatz: Entkriminalisierung, Rechte, Schutzinfrastruktur, Anonymität, faire Arbeitsbedingungen, Antidiskriminierung und gezielte Bekämpfung von Ausbeutung.",
    neutralFrame:
      "Dieses Szenario simuliert, welche Wirkungen ein stärker rechtebasierter und entstigmatisierender Ansatz erzeugen könnte."
  },
  {
    id: "custom",
    label: "Eigene Einstellung",
    description: "Du stellst die sechs politischen Stellschrauben frei selbst ein.",
    sliders: defaultSliders,
    evaluation: "Dieses Szenario zeigt die Wirkung deiner gewählten Kombination."
  }
];

export const sagSourceBox =
  "Das SAG versteht Sexarbeit als vielfältiges Arbeitsfeld und fordert unter anderem Entkriminalisierung, freiwillige Beratung, Datenschutz, Anonymität, faire Arbeitsorte, Antidiskriminierung, Peer-to-Peer-Beratung und gezielte Maßnahmen gegen Menschenhandel und Ausbeutung.";

export const comparisonClosing =
  "Gute Politik erkennt man nicht daran, wie hart sie klingt, sondern daran, ob sie Schutz erhöht, Ausbeutung sichtbar macht und Verlagerung verhindert.";

export const keyMessage =
  "Wenn soziale Infrastruktur fehlt, verschwinden Bedürfnisse nicht. Sie verlagern sich in weniger sichtbare und weniger kontrollierbare Räume.";

export const disclaimer =
  "Dieser Simulator ist ein heuristisches Wirkungsmodell. Er ersetzt keine empirische Studie und bildet nicht jede individuelle Erfahrung ab. Er soll sichtbar machen, warum pauschale Bewertungen und pauschale Politik der Realität nicht gerecht werden.";

export const finalStatement =
  "Nicht jede Form von Sexarbeit ist gleich. Aber pauschale Lösungen verfehlen fast immer die Realität.";

export const infrastructureComparison = {
  with: [
    "sichtbar",
    "regulierbar",
    "kontrollierbar",
    "ansprechbar",
    "schutzfähig"
  ],
  without: [
    "unsichtbar",
    "unreguliert",
    "riskanter",
    "schwer erreichbar",
    "schwer kontrollierbar"
  ]
};

export const protectionLawChecklist = [
  "Sicherheit erhöhen",
  "Zugang zu Beratung und Gesundheit verbessern",
  "Zwang und Ausbeutung erkennbarer machen",
  "Betroffene erreichbar machen",
  "Täterstrukturen gezielt bekämpfen",
  "selbstbestimmte Sexarbeiter:innen nicht durch Angst, Outing oder Bürokratie verdrängen",
  "Anonymität und Schutz der Identität ernst nehmen",
  "zwischen freiwilliger Arbeit, prekären Lagen, Zwang und Menschenhandel unterscheiden"
];

export const coercionLayer = {
  title: "Zwang und Ausbeutung bekämpfen",
  intro:
    "Zwang ist das Problem. Die entscheidende Frage ist: Unter welchen Bedingungen wird er sichtbar und bekämpfbar?",
  reality: [
    "fehlende Selbstbestimmung",
    "Kontrolle durch Dritte",
    "Gewalt, Drohung oder Abhängigkeit",
    "Schulden, ökonomischer Druck oder prekärer Aufenthaltsstatus",
    "Sprachbarrieren",
    "Angst vor Behörden"
  ],
  hardToSee: [
    "Betroffene haben oft Angst",
    "Täter kontrollieren Kommunikation",
    "Stigma verhindert Kontakt",
    "Kriminalisierung kann Vertrauen zerstören",
    "fehlende Hilfesysteme reduzieren Ausstiegswege"
  ],
  helps: [
    "niedrigschwellige Beratung",
    "anonyme Erstkontakte",
    "Gesundheitszugang",
    "mehrsprachige Hilfe",
    "sichere Unterkünfte",
    "Ausstiegshilfen",
    "Kooperation zwischen NGOs, Fachstellen und gezielter Strafverfolgung",
    "Finanzermittlungen gegen Täterstrukturen",
    "Schutz vor Abschiebung oder weiterer Bestrafung, wenn Betroffene Hilfe suchen"
  ],
  harms: [
    "pauschale Verdrängung",
    "Outing-Risiken",
    "reine Razzienlogik ohne Vertrauen",
    "Stigma",
    "Angst vor Behörden",
    "Verlagerung in private oder digitale Graubereiche"
  ]
};
