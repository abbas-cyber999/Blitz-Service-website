import { business } from "@/config/business";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Ueber uns", href: "/ueber-uns" },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Kontakt", href: "/contact" }
] as const;

export const serviceOptions = [
  "Gebaeudereinigung",
  "Bueroreinigung",
  "Treppenhausreinigung",
  "Umzugsreinigung",
  "Endreinigung",
  "Transport / Umzug"
] as const;

export const services = [
  {
    title: "Gebaeudereinigung",
    summary: "Der zentrale Schwerpunkt von Blitz Service GmbH fuer gepflegte, hygienische und repraesentative Immobilien.",
    description:
      "Wir reinigen gewerblich und privat genutzte Gebaeude strukturiert, diskret und mit konstant hoher Qualitaet. Von Eingangsbereichen bis zu sensiblen Flaechen setzen wir auf planbare Prozesse und feste Standards.",
    benefits: [
      "Individuelle Reinigungsplaene fuer Objektgroesse und Nutzung",
      "Sichtbar gepflegter erster Eindruck fuer Kunden, Mitarbeitende und Bewohner",
      "Zuverlaessige Ausfuehrung mit festen Ansprechpartnern"
    ],
    featured: true
  },
  {
    title: "Bueroreinigung",
    summary: "Saubere Arbeitsumgebungen fuer Produktivitaet, Hygiene und ein professionelles Erscheinungsbild.",
    description:
      "Regelmaessige Bueroreinigung mit Fokus auf Schreibtische, Gemeinschaftsflaechen, Sanitaerbereiche und Empfangszonen. Wir arbeiten effizient und moeglichst stoerungsarm im laufenden Betrieb.",
    benefits: [
      "Angenehme Arbeitsatmosphaere fuer Teams und Besucher",
      "Planbare Reinigungszeiten vor, waehrend oder nach Geschaeftszeiten",
      "Sorgfalt bei Kontaktflaechen und Sanitaarhygiene"
    ]
  },
  {
    title: "Treppenhausreinigung",
    summary: "Ordentliche und sichere Gemeinschaftsflaechen fuer Mehrfamilienhaeuser und Gewerbeobjekte.",
    description:
      "Wir halten Treppenhaeuser, Eingangsbereiche, Handlaeufe und Aufzugszonen kontinuierlich sauber. Das schafft Sicherheit, Werterhalt und einen gepflegten Gesamteindruck.",
    benefits: [
      "Regelmaessige Pflege mit dokumentierbaren Intervallen",
      "Weniger Schmutzeintrag in angrenzende Flaechen",
      "Sauberer Eindruck fuer Mieter, Kunden und Besucher"
    ]
  },
  {
    title: "Umzugsreinigung",
    summary: "Gruendliche Reinigung rund um Wohnungs- und Standortwechsel.",
    description:
      "Bei Auszug, Einzug oder Objektuebergabe sorgen wir fuer eine strukturierte Reinigung aller relevanten Bereiche. So lassen sich Uebergaben effizient und ohne Zeitdruck vorbereiten.",
    benefits: [
      "Entlastung in einer organisatorisch dichten Umzugsphase",
      "Gruendliche Reinigung von Kueche, Bad, Boeden und Flaechen",
      "Schnelle Terminvergabe nach Verfuegbarkeit"
    ]
  },
  {
    title: "Endreinigung",
    summary: "Sauberer Abschluss nach Renovierung, Bauphase oder Objektwechsel.",
    description:
      "Wir uebernehmen die abschliessende Feinreinigung von Raeumen und Oberflaechen, damit Immobilien bezugsfertig oder praesentationsbereit uebergeben werden koennen.",
    benefits: [
      "Sorgfaeltige Beseitigung von Staub und Rueckstaenden",
      "Geeignet fuer private und gewerbliche Objekte",
      "Klare Abstimmung zu Umfang und Termin"
    ]
  },
  {
    title: "Transport / Umzug",
    summary: "Ergaenzende Transportleistungen fuer private und gewerbliche Vorhaben.",
    description:
      "Neben der Reinigung unterstuetzen wir auf Wunsch mit Transport- und Umzugsleistungen. Damit erhalten Kunden eine koordinierte Loesung aus einer Hand.",
    benefits: [
      "Kombinierbar mit Reinigungsleistungen",
      "Strukturierte Planung und puenktliche Ausfuehrung",
      "Geeignet fuer kleinere und mittlere Umzugs- und Transportauftraege"
    ]
  }
] as const;

export const reviews = [
  {
    name: "Anna",
    city: "Duesseldorf",
    rating: 5,
    text: "Die Reinigung unseres Bueros ist konstant zuverlaessig und sehr ordentlich. Besonders schaetzen wir die puenktliche Abstimmung und die ruhige, professionelle Arbeitsweise."
  },
  {
    name: "Markus",
    city: "Duisburg",
    rating: 5,
    text: "Unsere Treppenhausreinigung laeuft seit Monaten reibungslos. Kommunikation, Qualitaet und Verbindlichkeit sind genau so, wie man es sich wuenscht."
  },
  {
    name: "Selin",
    city: "Essen",
    rating: 5,
    text: "Vor der Wohnungsuebergabe wurde alles gruendlich gereinigt. Der Termin war kurzfristig moeglich und das Ergebnis sehr sauber."
  }
] as const;

export const processSteps = [
  {
    title: "Anfrage und Beratung",
    text: "Sie schildern Bedarf, Objektgroesse und gewuenschten Leistungsumfang. Wir klaeren die Eckdaten unkompliziert und transparent."
  },
  {
    title: "Angebot und Planung",
    text: "Sie erhalten ein klar strukturiertes Angebot. Termine, Intervalle und Schwerpunkte werden verbindlich abgestimmt."
  },
  {
    title: "Ausfuehrung",
    text: "Unser Team arbeitet puenktlich, diskret und mit festen Qualitaetsstandards. Reinigung hat dabei immer Prioritaet."
  },
  {
    title: "Qualitaetssicherung",
    text: "Wir bleiben ansprechbar, dokumentieren Absprachen und optimieren die Leistung bei Bedarf gemeinsam mit Ihnen."
  }
] as const;

export const homeHighlights = [
  "Sauberkeit mit sichtbarem Qualitaetsanspruch",
  "Zuverlaessige Termine und verbindliche Kommunikation",
  "Schnelle Reaktionszeiten fuer gewerbliche und private Anfragen",
  "Professionelle, diskrete Arbeitsweise im Alltag Ihrer Immobilie"
] as const;

export const aboutValues = [
  "Verlaesslichkeit in der Terminplanung und Ausfuehrung",
  "Sorgfalt bei Details und sensiblen Arbeitsumgebungen",
  "Klare Kommunikation ohne uebertriebene Versprechen",
  "Kundenorientierung vom Erstkontakt bis zur laufenden Betreuung"
] as const;

export const legalDraftNotice = `Die folgenden Inhalte sind ein strukturierter Entwurf fuer ${business.name}. Vor dem produktiven Einsatz muessen alle Angaben rechtlich geprueft, vervollstaendigt und an die tatsaechlichen Unternehmensdaten angepasst werden.`;
