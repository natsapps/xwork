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
