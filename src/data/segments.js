export const segments = [
  {
    id: "executive",
    label: "High-End Escort / Executive Entlastung",
    summary:
      "Druck, Isolation und Verantwortung werden in einem diskreten, professionellen Rahmen reguliert.",
    weights: {
      prohibition: 0.86,
      regulation: 1.08,
      stigma: 1.18,
      infrastructure: 0.84,
      underground: 0.88,
      displacement: 1.02
    },
    need:
      "Menschen in hoher Verantwortung müssen beruflich und oft auch privat dauerhaft stark sein. Sie treffen Entscheidungen, tragen Verantwortung für Mitarbeitende, Familie oder Organisationen und dürfen kaum Schwäche zeigen. Dadurch entstehen Überforderung, Isolation, Druck und das Bedürfnis nach einem Raum, in dem sie nicht funktionieren müssen.",
    personEffect: [
      "mentale Entlastung",
      "körperliche Entspannung",
      "emotionale Stabilisierung",
      "Rollenpause",
      "Wiederherstellung von Handlungsfähigkeit",
      "Gefühl, kurz nicht stark sein zu müssen"
    ],
    socialFunction: [
      "Druck wird in einem klaren, diskreten und professionellen Rahmen reguliert",
      "private, berufliche oder hierarchische Systeme werden entlastet",
      "Bedürfnisse werden nicht in Abhängigkeitsverhältnisse verlagert",
      "hochbelastete Personen bekommen einen kontrollierten Raum für Entlastung"
    ],
    absence: [
      "Druck verschwindet nicht",
      "Verlagerung nach innen: Burnout, Isolation, Sucht, depressive Zustände",
      "Verlagerung nach außen: Grenzüberschreitungen, Machtmissbrauch, problematische Affären, unkontrollierte Kontexte",
      "mehr Heimlichkeit, weniger Reflexion, weniger klare Grenzen"
    ],
    skills: [
      {
        task: "Ich muss in Sekunden erkennen, ob jemand überlastet, angespannt oder innerlich leer ist.",
        explanation: "Die Arbeit beginnt oft nicht mit dem, was gesagt wird, sondern mit Ton, Körperspannung und kleinen Signalen.",
        challenge: "Viele Menschen in Machtpositionen sind geübt darin, Belastung zu überspielen.",
        missing: "Wenn dieser Skill fehlt, wird Druck eher reproduziert als reguliert."
      },
      {
        task: "Ich muss Nähe geben, ohne private Abhängigkeit entstehen zu lassen.",
        explanation: "Professionelle Entlastung braucht Resonanz, aber keine unklare Beziehung.",
        challenge: "Emotionale Offenheit kann schnell mit privater Bindung verwechselt werden.",
        missing: "Fehlen klare Grenzen, steigen Projektionen, Verstrickungen und Abhängigkeitsrisiken."
      },
      {
        task: "Ich muss Rollenwechsel steuern: Gespräch, Ruhe, Körperlichkeit, Distanz.",
        explanation: "Der Bedarf ist oft nicht linear, sondern wechselt zwischen Sprache, Entspannung und Rückzug.",
        challenge: "Das Setting muss sich anpassen, ohne beliebig zu werden.",
        missing: "Ohne diese Steuerung bleibt der Kontakt oberflächlich oder kippt in Missverständnisse."
      },
      {
        task: "Ich muss Diskretion und soziale Sicherheit herstellen.",
        explanation: "Der Raum funktioniert nur, wenn Vertrauen in Vertraulichkeit und Professionalität real vorhanden ist.",
        challenge: "Diskretion ist nicht nur Schweigen, sondern ein komplettes Sicherheitsversprechen.",
        missing: "Fehlt dieser Skill, wandern Bedürfnisse in heimlichere und riskantere Kontexte."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst Entlastung, Rollenpause, Diskretion und einen klaren Raum ohne Leistungszwang.",
        regulated:
          "Im regulierten System suchst du eher gezielt, diskret und innerhalb klarer Absprachen nach Entlastung.",
        absence:
          "Bei Verbot, Stigma oder Wegfall weicht das Bedürfnis eher in Heimlichkeit, Affären, Abhängigkeiten oder Selbstschädigung aus."
      },
      society: {
        function:
          "Das Segment reguliert Druck in einem professionellen Rahmen, statt ihn in Hierarchien oder private Abhängigkeiten auslaufen zu lassen.",
        relieves:
          "Entlastet indirekt Beziehungs-, Führungs- und Gesundheitssysteme.",
        absence:
          "Bei Wegfall steigen Isolation, heimliche Kompensation, Grenzverschiebungen und schwer bearbeitbare Folgekosten."
      }
    }
  },
  {
    id: "laufhaus",
    label: "Laufhaus / Hochtaktung",
    summary:
      "Spontane Nachfrage wird in sichtbare Räume kanalisiert; Druck, Frequenz und Sicherheitsroutinen sind zentral.",
    weights: {
      prohibition: 1.22,
      regulation: 1.02,
      stigma: 1.02,
      infrastructure: 1.16,
      underground: 1.18,
      displacement: 1.12
    },
    need:
      "Kund:innen suchen schnelle, klare, körperliche Bedürfnisbefriedigung ohne Beziehung, Dating-Dynamik oder lange emotionale Interaktion. Auf Seite der Sexarbeiter:innen herrschen oft hohe Frequenz, Zeitdruck, wechselnde Kund:innen und begrenzte Auswahlmöglichkeiten.",
    personEffect: [
      "schnelle körperliche Entladung",
      "Reduktion unmittelbarer Spannung",
      "klarer, zeitlich begrenzter Kontakt",
      "keine Beziehungserwartung"
    ],
    socialFunction: [
      "kanalisiert spontane Nachfrage in sichtbare Räume",
      "schafft eine formalisierte Struktur statt zufälliger oder aufdringlicher Annäherung",
      "macht Nachfrage kontrollierbarer als informelle oder verdeckte Kontexte",
      "kann bei guten Rahmenbedingungen Mindeststandards für Hygiene, Sicherheit und Grenzen ermöglichen"
    ],
    absence: [
      "Nachfrage verlagert sich in weniger sichtbare Räume",
      "mehr Straßen-, Wohnungs- oder Plattformausweichbewegungen",
      "weniger Kontrolle und weniger Zugang zu Hilfe",
      "höheres Risiko für Druck, Preisdumping und unsichere Settings"
    ],
    skills: [
      {
        task: "Ich muss Kund:innen extrem schnell einschätzen.",
        explanation: "In hochtaktigen Settings bleibt oft nur wenig Zeit, um Verhalten, Risiko und Grenzlage zu lesen.",
        challenge: "Zeitdruck und Frequenz reduzieren die Informationslage drastisch.",
        missing: "Fehlt dieser Skill, steigt das Risiko, Warnsignale zu spät zu erkennen."
      },
      {
        task: "Ich muss Grenzen in wenigen Sekunden klar machen.",
        explanation: "Die Kommunikation muss knapp, eindeutig und trotzdem wirksam sein.",
        challenge: "Hohe Taktung erzeugt Druck auf Tempo und Preis.",
        missing: "Ohne klare Grenzsetzung nehmen Überforderung und Grenzverschiebungen zu."
      },
      {
        task: "Ich muss hohe körperliche Belastung steuern, ohne Sicherheit zu verlieren.",
        explanation: "Belastung, Hygiene, Taktung und Selbstschutz laufen parallel.",
        challenge: "Ökonomischer Druck macht es schwer, Pausen und Standards durchzuhalten.",
        missing: "Fehlt diese Steuerung, steigen Verschleiß, Erschöpfung und Sicherheitslücken."
      },
      {
        task: "Ich muss Warnsignale trotz Routine sofort ernst nehmen.",
        explanation: "Routine darf Reaktionsfähigkeit nicht abstumpfen.",
        challenge: "Gerade Wiederholung macht Gefahren leicht unsichtbar.",
        missing: "Ohne diesen Skill werden riskante Situationen normalisiert."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst schnelle, klare Bedürfnisbefriedigung ohne Beziehungsdynamik.",
        regulated:
          "Im regulierten System bleibt Verhalten eher in sichtbaren, formalen und begrenzten Räumen.",
        absence:
          "Bei Wegfall verlagert sich Verhalten eher in Wohnungen, Straßenkontexte oder informelle Plattformen."
      },
      society: {
        function:
          "Das Segment kanalisiert spontane Nachfrage in sichtbare Strukturen statt in diffuse Annäherungs- und Ausweichbewegungen.",
        relieves:
          "Entlastet öffentliche Räume, Dating-Kontexte und informelle Grauzonen.",
        absence:
          "Bei Wegfall steigen unsichtbare Märkte, Preisdruck, Kontrollverlust und Erreichbarkeitsprobleme."
      }
    }
  },
  {
    id: "classic",
    label: "Klassische sexuelle Dienstleistung",
    summary:
      "Körperliche Bedürfnisse werden in einem klaren Rahmen mit Regeln, Zeit, Preis und Grenzen bearbeitet.",
    weights: {
      prohibition: 1.08,
      regulation: 1.04,
      stigma: 0.98,
      infrastructure: 1.06,
      underground: 1.08,
      displacement: 1.04
    },
    need:
      "Kund:innen suchen unkomplizierte Sexualität, bestimmte Praktiken oder körperliche Erfahrung ohne romantische Erwartung und ohne soziale Folgedynamik.",
    personEffect: [
      "körperliche Befriedigung",
      "Spannungsabbau",
      "Klarheit durch abgesprochene Erwartungen",
      "keine emotionale Verstrickung",
      "weniger Druck als im Dating"
    ],
    socialFunction: [
      "schafft einen klaren Rahmen für körperliche Bedürfnisse",
      "reduziert Missverständnisse durch eindeutige Absprachen",
      "trennt sexuelle Bedürfnisbefriedigung von privaten Beziehungserwartungen",
      "ermöglicht Konsens über Regeln, Zeit, Preis und Grenzen"
    ],
    absence: [
      "Verlagerung in Dating, Affären oder informelle Kontakte",
      "mehr unausgesprochene Erwartungen",
      "höhere Gefahr von Drucksituationen oder Grenzverschiebungen",
      "weniger klare Absprachen"
    ],
    skills: [
      {
        task: "Ich muss Erwartungen vorab konkret klären.",
        explanation: "Gerade weil das Setting klar sein soll, müssen Regeln und Grenzen präzise formuliert werden.",
        challenge: "Viele Missverständnisse entstehen aus impliziten Annahmen.",
        missing: "Fehlt diese Klärung, steigen Druck und Konflikte im Ablauf."
      },
      {
        task: "Ich muss Konsens und Grenzen verständlich formulieren.",
        explanation: "Die Professionalität liegt im klaren Rahmen, nicht in Unschärfe.",
        challenge: "Klarheit muss freundlich, aber verbindlich sein.",
        missing: "Ohne diesen Skill wächst das Risiko von Grenzverschiebungen."
      },
      {
        task: "Ich muss körperliche und gesundheitliche Standards halten.",
        explanation: "Sicherheit entsteht aus Routine, Wissen und Konsequenz.",
        challenge: "Ökonomischer Druck kann Standards untergraben.",
        missing: "Wenn Standards fehlen, steigt das Risiko für Schaden und Unsicherheit."
      },
      {
        task: "Ich muss Distanz wahren, ohne den Kontakt kalt oder entwürdigend werden zu lassen.",
        explanation: "Professionelle Distanz schützt beide Seiten.",
        challenge: "Nähe und Abgrenzung müssen gleichzeitig funktionieren.",
        missing: "Fehlt diese Balance, entstehen falsche Erwartungen oder Abwehr."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst unkomplizierte Sexualität ohne Beziehungsanspruch und ohne Dating-Druck.",
        regulated:
          "Im regulierten System bleibt das Verhalten eher in klaren Absprachen mit Regeln, Zeit und Grenzen.",
        absence:
          "Bei Wegfall verschiebt sich das Bedürfnis eher in unausgesprochene, private oder konflikthaftere Kontexte."
      },
      society: {
        function:
          "Das Segment trennt körperliche Bedürfnisbefriedigung von privaten Beziehungsdynamiken und macht sie besprechbar.",
        relieves:
          "Entlastet Dating-Kontexte, private Grauzonen und missverständnisanfällige Annäherungssituationen.",
        absence:
          "Bei Wegfall nehmen versteckte Erwartungen, Grenzverschiebungen und unklare private Dynamiken zu."
      }
    }
  },
  {
    id: "bdsm",
    label: "BDSM / spezialisierte Rollenarbeit",
    summary:
      "Intensive Dynamiken werden in kontrollierte Räume mit Wissen, Konsens und Sicherheitskultur überführt.",
    weights: {
      prohibition: 1.24,
      regulation: 1.22,
      stigma: 1.2,
      infrastructure: 1.18,
      underground: 1.14,
      displacement: 1.2
    },
    need:
      "Kund:innen suchen kontrollierte Kontrollabgabe, Machtumkehr, Rollenspiel, Intensität, Grenzerfahrung oder ein bewusst gestaltetes Setting. Oft geht es nicht um Kontrollverlust, sondern um einen klaren Rahmen, in dem intensive Dynamiken sicher möglich werden.",
    personEffect: [
      "bewusste Erfahrung von Kontrolle oder Kontrollabgabe",
      "intensive psychische und körperliche Regulation",
      "Spannungsabbau",
      "Selbstwahrnehmung",
      "Möglichkeit, verborgene Bedürfnisse sicher auszudrücken"
    ],
    socialFunction: [
      "kanalisiert intensive Bedürfnisse in geregelte Räume",
      "verhindert uninformierte Grenzexperimente",
      "stärkt Konsens- und Sicherheitskultur",
      "macht riskante Dynamiken besprechbar und strukturierbar"
    ],
    absence: [
      "Verlagerung in private oder uninformierte Experimente",
      "erhöhtes Verletzungsrisiko",
      "weniger Wissen über Grenzen, Anatomie und Sicherheit",
      "mehr Heimlichkeit und Scham",
      "weniger Abbruch- und Nachsorgestrukturen"
    ],
    detail:
      "BDSM ist kein Kontrollverlust. Professionelle BDSM-Arbeit basiert auf Wissen, Kontrolle, Konsens und Verantwortung.",
    skills: [
      {
        task: "Ich muss Anatomie, empfindliche Körperbereiche und Warnsignale sicher kennen.",
        explanation: "Kreislauf, Atmung, Nervenverläufe und Belastungsgrenzen sind keine Nebensache, sondern Grundlage der Arbeit.",
        challenge: "Risiken entstehen oft nicht spektakulär, sondern leise und in Sekunden.",
        missing: "Fehlt dieses Wissen, können körperliche Schäden entstehen, bevor jemand sie benennen kann."
      },
      {
        task: "Ich muss unterscheiden, ob eine Reaktion gespielt, gewünscht oder gefährlich ist.",
        explanation: "Professionelle Wahrnehmung liest Mimik, Muskeltonus, Atmung und nonverbale Signale in Echtzeit.",
        challenge: "Im intensiven Setting sehen reale Überforderung und gewollte Rolle manchmal ähnlich aus.",
        missing: "Ohne diesen Skill steigen Überforderung, Dissoziation und Grenzüberschreitungsrisiken."
      },
      {
        task: "Ich muss Konsens vorab und währenddessen aktiv prüfen.",
        explanation: "Einvernehmlichkeit ist kein einmaliges Häkchen, sondern ein dynamischer Prozess.",
        challenge: "Je intensiver das Setting, desto wichtiger wird laufende Kommunikation.",
        missing: "Fehlt diese Kontrolle, wird das Setting unklar, unsicher und potenziell schädlich."
      },
      {
        task: "Ich muss Stoppsignale ernst nehmen und sofort handeln.",
        explanation: "Verantwortung bedeutet, das gesamte Setting zu führen und jederzeit abbrechen zu können.",
        challenge: "Gerade in hochdynamischen Rollenarbeiten muss Reaktion sofort und souverän sein.",
        missing: "Wenn dieser Skill fehlt, wird aus kontrollierter Intensität reale Gefährdung."
      },
      {
        task: "Ich muss Nachsorge leisten und psychische Überforderung erkennen.",
        explanation: "Intensive Erfahrungen brauchen Stabilisierung und Rückführung in den Alltag.",
        challenge: "Nachsorge beginnt oft dort, wo Außenstehende den Prozess für beendet halten.",
        missing: "Fehlt sie, bleiben Belastung, Scham oder Desorientierung ungeordnet zurück."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst Intensität, Rollenarbeit oder kontrollierte Kontrollabgabe - aber in einem sicheren Rahmen.",
        regulated:
          "Im regulierten System wird dieses Bedürfnis eher in klaren Regeln, Wissen, Stoppsignalen und Nachsorge bearbeitet.",
        absence:
          "Bei Verbot, Stigma oder Wegfall weicht es eher in private Experimente, Heimlichkeit und unsichere Dynamiken aus."
      },
      society: {
        function:
          "Das Segment übersetzt intensive Dynamiken in eine Kultur von Konsens, Sicherheitswissen und strukturierter Verantwortung.",
        relieves:
          "Entlastet private Kontexte von uninformierten Grenzexperimenten und mindert Folgeprobleme aus Verletzung und Scham.",
        absence:
          "Bei Wegfall steigen Verletzungsrisiken, Wissensdefizite, Scham und schwer erreichbare Nachsorgebedarfe."
      }
    }
  },
  {
    id: "events",
    label: "Events / Gruppen / Junggesellenabschied",
    summary:
      "Enthemmung und Gruppendynamik werden in einen professionellen Rahmen mit klaren Regeln überführt.",
    weights: {
      prohibition: 1.1,
      regulation: 0.96,
      stigma: 0.94,
      infrastructure: 1.04,
      underground: 1.08,
      displacement: 1.1
    },
    need:
      "Gruppen suchen Erlebnis, Nervenkitzel, Humor, Status, Grenzspiel oder gemeinsame Erinnerung. Oft wirken Alkohol, Gruppendruck und Enthemmung mit.",
    personEffect: [
      "ritualisierte Enthemmung",
      "gemeinsames Erlebnis",
      "kontrollierter Rahmen für Spannung und Neugier",
      "soziale Lockerung"
    ],
    socialFunction: [
      "kanalisiert Gruppendynamik in einen professionellen Rahmen",
      "verhindert, dass Enthemmung ungefiltert auf unbeteiligte Personen trifft",
      "schafft klare Regeln in Situationen, die sonst leicht kippen können",
      "macht Grenzen innerhalb einer Gruppe sichtbar"
    ],
    absence: [
      "Verlagerung in Bars, öffentliche Räume oder private Partys",
      "höhere Gefahr von Belästigung unbeteiligter Personen",
      "weniger professionelle Grenzsetzung",
      "mehr Risiko durch Alkohol und Gruppendruck",
      "weniger kontrollierbare Situationen"
    ],
    skills: [
      {
        task: "Ich muss Gruppendynamik in Echtzeit lesen.",
        explanation: "Nicht nur einzelne Personen, sondern die Gruppe als Ganzes muss geführt werden.",
        challenge: "Statusspiele, Alkohol und Gruppendruck können in Sekunden umschlagen.",
        missing: "Fehlt dieser Skill, kippt der Rahmen schnell in Grenzverletzung oder Chaos."
      },
      {
        task: "Ich muss Grenzen gegenüber mehreren Personen gleichzeitig halten.",
        explanation: "Autorität und Klarheit müssen auch unter Lärm, Humor und Enthemmung tragen.",
        challenge: "Mehrere Personen bedeuten mehr Druck, mehr Unberechenbarkeit und mehr Testen von Grenzen.",
        missing: "Ohne diesen Skill steigt das Risiko für eskalierende Situationen."
      },
      {
        task: "Ich muss deeskalieren, ohne die Situation zu verlieren.",
        explanation: "Sicherheit entsteht hier aus Präsenz, Timing und souveräner Führung.",
        challenge: "Deeskalation darf weder unterwürfig noch unnötig konfrontativ werden.",
        missing: "Fehlt sie, verlagert sich die Dynamik schnell in öffentliche oder unkontrollierbare Räume."
      },
      {
        task: "Ich muss einen Sicherheitsausstieg jederzeit mitdenken.",
        explanation: "Professionelle Kontrolle heißt, auch das Ende einer Situation vorausschauend zu planen.",
        challenge: "Gruppen akzeptieren Stopps oft erst, wenn sie klar und früh gesetzt werden.",
        missing: "Ohne Notausstieg steigt das Risiko für Belästigung, Kontrollverlust und Druck."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst als Gruppe Erlebnis, Spannung und soziale Lockerung.",
        regulated:
          "Im regulierten System bleibt diese Dynamik eher in einem professionell geführten Rahmen mit klaren Grenzen.",
        absence:
          "Bei Wegfall verlagert sie sich eher in Bars, Partys oder öffentliche Räume mit mehr Risiko für Unbeteiligte."
      },
      society: {
        function:
          "Das Segment fängt Enthemmung und Gruppendruck in kontrollierten Settings auf.",
        relieves:
          "Entlastet öffentliche Räume, Gastronomie und private Partykontexte von eskalierender Enthemmung.",
        absence:
          "Bei Wegfall steigen Belästigungsrisiken, Druck auf Unbeteiligte und schwer kontrollierbare Gruppensituationen."
      }
    }
  },
  {
    id: "insecure",
    label: "Unsichere oder unerfahrene Kund:innen",
    summary:
      "Scham, Unsicherheit und Leistungsdruck werden in einen klaren Lern- und Erfahrungsraum überführt.",
    weights: {
      prohibition: 1.08,
      regulation: 1.06,
      stigma: 1.18,
      infrastructure: 1.12,
      underground: 1.02,
      displacement: 1.08
    },
    need:
      "Manche Kund:innen haben wenig Erfahrung, Scham, Angst vor Bewertung, Leistungsdruck, körperliche Unsicherheit oder negative Erfahrungen. Im Dating erleben sie Unsicherheit oft als Scheitern oder Peinlichkeit.",
    personEffect: [
      "Scham reduziert sich",
      "Selbstvertrauen steigt",
      "Körperkontakt wird weniger angstbesetzt",
      "erste Erfahrungen finden in einem klaren Rahmen statt",
      "Druck und Versagensangst können sinken"
    ],
    socialFunction: [
      "bietet einen sicheren Lern- und Erfahrungsraum",
      "reduziert ungeschickte oder übergriffige Annäherungsversuche",
      "verhindert, dass Unsicherheit nur in Frust, Rückzug oder Aggression verarbeitet wird",
      "stärkt respektvolle Kommunikation über Bedürfnisse und Grenzen"
    ],
    absence: [
      "Unsicherheit bleibt unbearbeitet",
      "Rückzug, Frustration oder problematisches Verhalten können zunehmen",
      "mehr Druck im Dating",
      "mehr Scham und Isolation",
      "Bedürfnisse werden heimlicher oder unkontrollierter ausgelebt"
    ],
    skills: [
      {
        task: "Ich muss Unsicherheit erkennen, ohne zu beschämen.",
        explanation: "Der professionelle Raum funktioniert nur, wenn Unsicherheit nicht als Defizit markiert wird.",
        challenge: "Viele Menschen kommen bereits mit Abwehr oder Scham in die Situation.",
        missing: "Fehlt dieser Skill, verstärkt der Kontakt die Unsicherheit statt sie zu regulieren."
      },
      {
        task: "Ich muss Tempo reduzieren und Erwartungen entdramatisieren.",
        explanation: "Sicherheit entsteht oft durch Verlangsamung, Klarheit und einfache Schritte.",
        challenge: "Druck auf Leistung oder Ergebnis ist häufig schon stark internalisiert.",
        missing: "Ohne diese Führung steigt Frust, Überforderung und Rückzug."
      },
      {
        task: "Ich muss klare, einfache Sprache verwenden.",
        explanation: "Komplexe Signale oder unausgesprochene Erwartungen verunsichern weiter.",
        challenge: "Das Setting muss verständlich sein, ohne bevormundend zu wirken.",
        missing: "Fehlt Klarheit, entstehen Missverständnisse und neue Scham."
      },
      {
        task: "Ich muss Sicherheit vermitteln, ohne Abhängigkeit zu erzeugen.",
        explanation: "Der Raum soll stärken, nicht binden.",
        challenge: "Gerade erste positive Erfahrungen können emotional stark besetzt sein.",
        missing: "Ohne diesen Skill verschiebt sich Unsicherheit nur in neue Bindungsprobleme."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst einen klaren, nicht abwertenden Raum für Orientierung, Erfahrung und Sicherheit.",
        regulated:
          "Im regulierten System bleibt dieses Bedürfnis eher in einem begleiteten, respektvollen und klar begrenzten Rahmen.",
        absence:
          "Bei Wegfall bleiben Scham, Frust und Rückzug eher unbearbeitet oder werden problematisch ausagiert."
      },
      society: {
        function:
          "Das Segment schafft einen Lernraum für respektvolle Kommunikation, statt Unsicherheit im sozialen Alltag eskalieren zu lassen.",
        relieves:
          "Entlastet Dating-Kontexte, soziale Räume und indirekt psychische Belastungssysteme.",
        absence:
          "Bei Wegfall steigen Isolation, Frustration, missglückte Annäherungen und schwer bearbeitbare Schamdynamiken."
      }
    }
  },
  {
    id: "companionship",
    label: "Nähe / Einsamkeit / Begleitung",
    summary:
      "Nähe, Gespräch und Verbindung werden zugänglich gemacht, wo familiäre oder partnerschaftliche Strukturen fehlen.",
    weights: {
      prohibition: 0.94,
      regulation: 1.02,
      stigma: 1.08,
      infrastructure: 0.92,
      underground: 0.9,
      displacement: 1.04
    },
    need:
      "Menschen erleben Einsamkeit, Trennung, Alter, Krankheit, soziale Isolation oder fehlende partnerschaftliche Nähe. Oft geht es nicht primär um Sex, sondern um Berührung, Gespräch, gesehen werden und Verbindung.",
    personEffect: [
      "Einsamkeit wird kurzfristig gelindert",
      "emotionale Stabilisierung",
      "Gefühl von Verbindung",
      "körperliche Nähe ohne Beziehungsdruck",
      "Selbstwert kann steigen",
      "Alltag wird für einen Moment weniger leer"
    ],
    socialFunction: [
      "kompensiert Lücken in sozialen und familiären Strukturen",
      "schafft Zugang zu Nähe für Menschen, die sonst ausgeschlossen sind",
      "reduziert Isolation",
      "kann psychische Belastungen abfedern",
      "entlastet indirekt Gesundheits- und Sozialsysteme"
    ],
    absence: [
      "mehr Isolation",
      "mehr psychische Belastung",
      "mehr Rückzug",
      "mehr Druck auf therapeutische oder soziale Systeme",
      "Bedürfnisse nach Nähe bleiben bestehen, aber ohne sicheren Rahmen"
    ],
    skills: [
      {
        task: "Ich muss Einsamkeit erkennen, ohne Mitleid oder Abwertung zu erzeugen.",
        explanation: "Die Arbeit braucht Würde, nicht Herablassung.",
        challenge: "Einsamkeit ist oft schambesetzt und wird indirekt kommuniziert.",
        missing: "Fehlt dieser Skill, wird Nähe entwertet statt wirksam."
      },
      {
        task: "Ich muss Wärme geben, ohne falsche Beziehungserwartung zu erzeugen.",
        explanation: "Professionelle Nähe braucht echte Resonanz und klare Begrenzung zugleich.",
        challenge: "Gerade bei isolierten Menschen ist Bindungsdynamik hochsensibel.",
        missing: "Ohne diese Balance steigen Enttäuschung und emotionale Abhängigkeit."
      },
      {
        task: "Ich muss Nähe dosieren und Gespräche halten können.",
        explanation: "Nicht jede Person braucht das Gleiche; Rhythmus und Intensität müssen geführt werden.",
        challenge: "Bedürfnisse können stark schwanken zwischen Schweigen, Berührung und Reden.",
        missing: "Fehlt diese Steuerung, bleibt die Begegnung leer oder überfordernd."
      },
      {
        task: "Ich muss sauber aus der Rolle führen.",
        explanation: "Der Kontakt braucht ein professionelles Ende, damit Verbindung nicht in Verlassenheit kippt.",
        challenge: "Gerade wirksame Nähe macht Abschiede anspruchsvoll.",
        missing: "Ohne diesen Skill bleibt der Kontakt emotional ungeordnet zurück."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst Nähe, Berührung, Gespräch oder Begleitung ohne Beziehungsdruck.",
        regulated:
          "Im regulierten System bleibt dieses Bedürfnis eher in einem würdevollen, klar gerahmten und ansprechbaren Kontext.",
        absence:
          "Bei Wegfall verstärken sich eher Isolation, Rückzug und die Suche nach unklaren Ersatzformen."
      },
      society: {
        function:
          "Das Segment fängt Lücken in Familien-, Partnerschafts- und Nahesystemen auf.",
        relieves:
          "Entlastet indirekt Gesundheits-, Sozial- und Unterstützungsstrukturen.",
        absence:
          "Bei Wegfall steigen Isolation, psychische Belastung und Druck auf andere Versorgungssysteme."
      }
    }
  },
  {
    id: "online",
    label: "Online / digitale Sexarbeit",
    summary:
      "Bedürfnisse werden in körperlich risikoärmere, aber digital strukturierte Räume verschoben, mit eigenen Plattform- und Abhängigkeitsrisiken.",
    weights: {
      prohibition: 0.88,
      regulation: 0.86,
      stigma: 1.14,
      infrastructure: 0.78,
      underground: 0.94,
      displacement: 0.98
    },
    need:
      "Kund:innen suchen Fantasie, Aufmerksamkeit, Interaktion, Anonymität, digitale Nähe oder kontrollierbare Distanz. Sexarbeiter:innen arbeiten mit Sichtbarkeit, Plattformlogiken, digitaler Intimität und oft dauerhafter Erreichbarkeit.",
    personEffect: [
      "niedrigschwelliger Zugang",
      "Fantasie und Interaktion ohne physischen Kontakt",
      "anonyme oder kontrollierte Nähe",
      "weniger Hemmung als im direkten Kontakt"
    ],
    socialFunction: [
      "verlagert Bedürfnisse in körperlich risikoärmere Räume",
      "ermöglicht Zugang für Menschen mit Scham, Distanzwunsch oder Einschränkungen",
      "schafft alternative Einkommens- und Arbeitsformen",
      "kann physische Risiken reduzieren, erzeugt aber digitale Risiken"
    ],
    absence: [
      "Verlagerung in unsicherere physische Kontakte",
      "mehr informelle Plattformen oder Graubereiche",
      "weniger Kontrolle über Datenschutz und Ausbeutung",
      "mehr Abhängigkeit von nicht regulierten Kanälen"
    ],
    skills: [
      {
        task: "Ich muss digitale Grenzen konsequent setzen.",
        explanation: "Verfügbarkeit, Kontaktzeiten und Interaktionsform müssen aktiv begrenzt werden.",
        challenge: "Digitale Nähe erzeugt leicht den Eindruck permanenter Erreichbarkeit.",
        missing: "Fehlt dieser Skill, entstehen Übergriffsdruck und Entgrenzung."
      },
      {
        task: "Ich muss Datenschutz und Anonymität schützen.",
        explanation: "Sicherheit entsteht hier stark über technische und organisatorische Selbstverteidigung.",
        challenge: "Plattformen, Screenshots und Datenlecks sind strukturelle Risiken.",
        missing: "Ohne diesen Skill steigen Erpressbarkeit, Sichtbarkeitsrisiken und Kontrollverlust."
      },
      {
        task: "Ich muss mit parasozialer Nähe umgehen.",
        explanation: "Digitale Intimität wirkt oft persönlicher, als sie professionell ist.",
        challenge: "Projektionen können sich online besonders dauerhaft festsetzen.",
        missing: "Fehlt diese Abgrenzung, wachsen emotionale und ökonomische Abhängigkeiten."
      },
      {
        task: "Ich muss Plattform- und Einkommensrisiken mitdenken.",
        explanation: "Digitale Arbeit ist immer auch von algorithmischer Sichtbarkeit und Kanalabhängigkeit geprägt.",
        challenge: "Sperrungen oder Regeländerungen können Arbeitsrealität abrupt kippen.",
        missing: "Ohne diesen Skill wird digitale Arbeit schnell prekär und schwer steuerbar."
      }
    ],
    roleViews: {
      client: {
        need: "Du suchst Fantasie, Interaktion, Anonymität oder Nähe auf Distanz.",
        regulated:
          "Im regulierten System bleibt dieses Bedürfnis eher in technisch und rechtlich besser absicherbaren Räumen.",
        absence:
          "Bei Wegfall verlagert es sich eher in intransparente Plattformen oder physische Ausweichkontakte."
      },
      society: {
        function:
          "Das Segment bietet körperlich risikoärmere Räume, schafft aber eigene digitale Schutzaufgaben.",
        relieves:
          "Entlastet physische Kontaktmärkte und erweitert Zugang für Menschen mit Distanzwunsch oder Einschränkungen.",
        absence:
          "Bei Wegfall steigen physische Ausweichbewegungen, Plattformgrauzonen und Datenschutzrisiken."
      }
    }
  }
];

export const segmentMap = Object.fromEntries(segments.map((segment) => [segment.id, segment]));
