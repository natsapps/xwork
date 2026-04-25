import { defaultSliders } from "./config";

export const politicalGoals = [
  {
    id: "exploitation",
    label: "Ausbeutung senken",
    description:
      "Priorisiert Bekämpfbarkeit von Zwang, Zugang zu Hilfe und geringeres Ausbeutungsrisiko."
  },
  {
    id: "safety",
    label: "Sicherheit erhöhen",
    description:
      "Priorisiert Schutzinfrastruktur, sichere Arbeitsorte, Sichtbarkeit und verlässliche Standards."
  },
  {
    id: "underground",
    label: "Untergrund vermeiden",
    description:
      "Priorisiert Sichtbarkeit, Anonymität, Zugang und geringe Verlagerung in unsichere Räume."
  }
];

export const ideologyPresets = [
  {
    id: "status-quo",
    label: "Status Quo / ProstSchG",
    description:
      "Schutzabsicht mit Regulierung, aber hohem Stigma, schwacher Anonymität und realen Rückzugsrisiken.",
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
      "Hoher Verbotsdruck, hohe Stigmatisierung und begrenzte Schutzpfade. Nach außen hart, nach innen oft verdrängend.",
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
      "Niedrige Repression und relativ viel Anonymität, aber schwache Standards, wenig Infrastruktur und zu wenig gezielte Absicherung.",
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
      "Rechtebasiertes Szenario mit Entstigmatisierung, hoher Schutzinfrastruktur, starker Anonymität und gezielter Bekämpfung von Ausbeutung.",
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
    description: "Nutzer:innen können alle Slider frei verändern.",
    sliders: defaultSliders,
    evaluation: "Dieses Szenario zeigt die Wirkung deiner gewählten Kombination."
  }
];
