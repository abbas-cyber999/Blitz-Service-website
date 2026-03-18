import {
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  Home,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import { business } from "@/config/business";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Dienstleistungen", href: "/services" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Bewertungen", href: "/bewertungen" },
  { label: "Kontakt", href: "/contact" }
] as const;

export const serviceMenuItems = [
  {
    title: "Gebäudereinigung",
    text: "Gepflegte, repräsentative Immobilien mit festen Reinigungsstandards.",
    href: "/services",
    icon: Building2
  },
  {
    title: "Büroreinigung",
    text: "Saubere Arbeitsplätze und Empfangsbereiche für einen professionellen Eindruck.",
    href: "/services",
    icon: BriefcaseBusiness
  },
  {
    title: "Treppenhausreinigung",
    text: "Ordentliche Gemeinschaftsflächen für Wohn- und Gewerbeobjekte.",
    href: "/services",
    icon: ClipboardCheck
  },
  {
    title: "Umzugsreinigung",
    text: "Gründliche Reinigung vor Einzug, Auszug oder Objektübergabe.",
    href: "/services",
    icon: Home
  },
  {
    title: "Endreinigung",
    text: "Sauberer Abschluss nach Bauphase, Renovierung oder Objektwechsel.",
    href: "/services",
    icon: ShieldCheck
  },
  {
    title: "Fensterreinigung",
    text: "Klare Glasflächen und ein gepflegter Gesamteindruck für Ihr Objekt.",
    href: "/services",
    icon: Sparkles
  },
  {
    title: "Praxisreinigung",
    text: "Diskrete Reinigung sensibler Arbeitsumgebungen mit hohem Anspruch.",
    href: "/services",
    icon: HeartPulse
  },
  {
    title: "Transport / Umzug",
    text: "Ergänzende Transportleistungen für koordinierte Gesamtprojekte.",
    href: "/services",
    icon: Truck
  }
] as const;

export const serviceOptions = [
  "Gebäudereinigung",
  "Büroreinigung",
  "Treppenhausreinigung",
  "Umzugsreinigung",
  "Endreinigung",
  "Transport / Umzug"
] as const;

export const services = [
  {
    title: "Gebäudereinigung",
    summary:
      "Der Kernservice von Blitz Service GmbH für gepflegte, hygienische und repräsentative Immobilien.",
    description:
      "Wir reinigen gewerblich und privat genutzte Gebäude strukturiert, diskret und mit konstant hoher Qualität. Von Eingangsbereichen bis zu sensiblen Flächen setzen wir auf planbare Prozesse und feste Standards.",
    benefits: [
      "Individuelle Reinigungspläne für Objektgröße und Nutzung",
      "Sichtbar gepflegter Eindruck für Kunden, Mitarbeitende und Bewohner",
      "Zuverlässige Ausführung mit festen Ansprechpartnern"
    ],
    featured: true,
    icon: Building2
  },
  {
    title: "Büroreinigung",
    summary:
      "Saubere Arbeitsumgebungen für Produktivität, Hygiene und ein professionelles Erscheinungsbild.",
    description:
      "Regelmäßige Büroreinigung mit Fokus auf Schreibtische, Gemeinschaftsflächen, Sanitärbereiche und Empfangszonen. Wir arbeiten effizient und möglichst störungsarm im laufenden Betrieb.",
    benefits: [
      "Angenehme Arbeitsatmosphäre für Teams und Besucher",
      "Planbare Reinigungszeiten vor, während oder nach Geschäftszeiten",
      "Sorgfalt bei Kontaktflächen und Sanitärhygiene"
    ],
    icon: Sparkles
  },
  {
    title: "Treppenhausreinigung",
    summary:
      "Ordentliche und sichere Gemeinschaftsflächen für Mehrfamilienhäuser und Gewerbeobjekte.",
    description:
      "Wir halten Treppenhäuser, Eingangsbereiche, Handläufe und Aufzugszonen kontinuierlich sauber. Das schafft Sicherheit, Werterhalt und einen gepflegten Gesamteindruck.",
    benefits: [
      "Regelmäßige Pflege mit dokumentierbaren Intervallen",
      "Weniger Schmutzeintrag in angrenzende Flächen",
      "Sauberer Eindruck für Mieter, Kunden und Besucher"
    ],
    icon: ClipboardCheck
  },
  {
    title: "Umzugsreinigung",
    summary: "Gründliche Reinigung rund um Wohnungs- und Standortwechsel.",
    description:
      "Bei Auszug, Einzug oder Objektübergabe sorgen wir für eine strukturierte Reinigung aller relevanten Bereiche. So lassen sich Übergaben effizient und ohne Zeitdruck vorbereiten.",
    benefits: [
      "Entlastung in einer organisatorisch dichten Umzugsphase",
      "Gründliche Reinigung von Küche, Bad, Böden und Flächen",
      "Schnelle Terminvergabe nach Verfügbarkeit"
    ],
    icon: ShieldCheck
  },
  {
    title: "Endreinigung",
    summary: "Sauberer Abschluss nach Renovierung, Bauphase oder Objektwechsel.",
    description:
      "Wir übernehmen die abschließende Feinreinigung von Räumen und Oberflächen, damit Immobilien bezugsfertig oder präsentationsbereit übergeben werden können.",
    benefits: [
      "Sorgfältige Beseitigung von Staub und Rückständen",
      "Geeignet für private und gewerbliche Objekte",
      "Klare Abstimmung zu Umfang und Termin"
    ],
    icon: Clock3
  },
  {
    title: "Transport / Umzug",
    summary: "Ergänzende Transportleistungen für private und gewerbliche Vorhaben.",
    description:
      "Neben der Reinigung unterstützen wir auf Wunsch mit Transport- und Umzugsleistungen. Damit erhalten Kunden eine koordinierte Lösung aus einer Hand.",
    benefits: [
      "Kombinierbar mit Reinigungsleistungen",
      "Strukturierte Planung und pünktliche Ausführung",
      "Geeignet für kleinere und mittlere Umzugs- und Transportaufträge"
    ],
    icon: Truck
  }
] as const;

export const reviews = [
  {
    name: "Anna",
    city: "Düsseldorf",
    rating: 5,
    text: "Die Reinigung unseres Büros ist konstant zuverlässig und sehr ordentlich. Besonders schätzen wir die pünktliche Abstimmung und die ruhige, professionelle Arbeitsweise."
  },
  {
    name: "Markus",
    city: "Duisburg",
    rating: 5,
    text: "Unsere Treppenhausreinigung läuft seit Monaten reibungslos. Kommunikation, Qualität und Verbindlichkeit sind genau so, wie man es sich wünscht."
  },
  {
    name: "Selin",
    city: "Moers",
    rating: 5,
    text: "Vor der Wohnungsübergabe wurde alles gründlich gereinigt. Der Termin war kurzfristig möglich und das Ergebnis war sehr professionell."
  }
] as const;

export const processSteps = [
  {
    title: "Anfrage und Beratung",
    text: "Sie schildern Bedarf, Objektgröße und gewünschten Leistungsumfang. Wir klären die Eckdaten unkompliziert und transparent."
  },
  {
    title: "Angebot und Planung",
    text: "Sie erhalten ein klar strukturiertes Angebot. Termine, Intervalle und Schwerpunkte werden verbindlich abgestimmt."
  },
  {
    title: "Ausführung",
    text: "Unser Team arbeitet pünktlich, diskret und mit festen Qualitätsstandards. Reinigung hat dabei immer Priorität."
  },
  {
    title: "Qualitätssicherung",
    text: "Wir bleiben ansprechbar, dokumentieren Absprachen und optimieren die Leistung bei Bedarf gemeinsam mit Ihnen."
  }
] as const;

export const homeHighlights = [
  "Sauberkeit mit sichtbarem Qualitätsanspruch",
  "Zuverlässige Termine und verbindliche Kommunikation",
  "Schnelle Reaktionszeiten für gewerbliche und private Anfragen",
  "Professionelle, diskrete Arbeitsweise im Alltag Ihrer Immobilie"
] as const;

export const aboutValues = [
  "Verlässlichkeit in der Terminplanung und Ausführung",
  "Sorgfalt bei Details und sensiblen Arbeitsumgebungen",
  "Klare Kommunikation ohne übertriebene Versprechen",
  "Kundenorientierung vom Erstkontakt bis zur laufenden Betreuung"
] as const;

export const trustPoints = [
  {
    title: "Zuverlässige Einsatzplanung",
    text: "Verbindliche Zeiten, klare Kommunikation und nachvollziehbare Abläufe für Objekte jeder Größe."
  },
  {
    title: "Reinigung mit Priorität",
    text: "Die Hauptleistung ist Reinigung. Transport unterstützen wir ergänzend dort, wo es sinnvoll ist."
  },
  {
    title: "Schnelle Rückmeldung",
    text: "Kurze Reaktionszeiten bei Anfragen, Besichtigungen und Angebotswünschen."
  }
] as const;

export const faqs = [
  {
    question: "Für welche Objekte bieten Sie Reinigung an?",
    answer:
      "Wir betreuen Büros, Treppenhäuser, Wohnobjekte sowie gewerbliche Flächen. Der Fokus liegt auf regelmäßig gepflegten Immobilien und professioneller Objektbetreuung."
  },
  {
    question: "Ist Transport ebenfalls möglich?",
    answer:
      "Ja. Transport- und Umzugsleistungen sind als ergänzender Service verfügbar, wenn mehrere Aufgaben koordiniert aus einer Hand umgesetzt werden sollen."
  },
  {
    question: "Wie schnell erhalten wir ein Angebot?",
    answer:
      "In der Regel sehr kurzfristig. Nach einer kurzen Abstimmung zu Objekt, Umfang und Einsatzort erstellen wir ein passendes Angebot."
  }
] as const;

export const legalDraftNotice = `Die folgenden Inhalte sind ein strukturierter Entwurf für ${business.name}. Vor dem produktiven Einsatz müssen alle Angaben rechtlich geprüft, vervollständigt und an die tatsächlichen Unternehmensdaten angepasst werden.`;
