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
  { label: "News", href: "/news" },
  { label: "Reinigung", href: "/reinigung" },
  { label: "Umzug / Transport", href: "/umzug" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/contact" }
] as const;

export const serviceMenuItems = [
  {
    title: "Gebäudereinigung",
    text: "Gepflegte, repräsentative Immobilien mit festen Reinigungsstandards.",
    href: "/reinigung",
    icon: Building2
  },
  {
    title: "Büroreinigung",
    text: "Saubere Arbeitsplätze und Empfangsbereiche für einen professionellen Eindruck.",
    href: "/reinigung",
    icon: BriefcaseBusiness
  },
  {
    title: "Treppenhausreinigung",
    text: "Ordentliche Gemeinschaftsflächen für Wohn- und Gewerbeobjekte.",
    href: "/reinigung",
    icon: ClipboardCheck
  },
  {
    title: "Umzugsreinigung",
    text: "Gründliche Reinigung vor Einzug, Auszug oder Objektübergabe.",
    href: "/reinigung",
    icon: Home
  },
  {
    title: "Endreinigung",
    text: "Sauberer Abschluss nach Bauphase, Renovierung oder Objektwechsel.",
    href: "/reinigung",
    icon: ShieldCheck
  },
  {
    title: "Fensterreinigung",
    text: "Klare Glasflächen und ein gepflegter Gesamteindruck für Ihr Objekt.",
    href: "/reinigung",
    icon: Sparkles
  },
  {
    title: "Praxisreinigung",
    text: "Diskrete Reinigung sensibler Arbeitsumgebungen mit hohem Anspruch.",
    href: "/reinigung",
    icon: HeartPulse
  },
  {
    title: "Transport / Umzug",
    text: "Ergänzende Transportleistungen für koordinierte Gesamtprojekte.",
    href: "/umzug",
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
    name: "Markus K.",
    city: "Duisburg",
    rating: 5,
    text: "Die Abstimmung lief schnell und verbindlich. Unser Treppenhaus wird sauber und zuverlässig betreut."
  },
  {
    name: "Selin A.",
    city: "Moers",
    rating: 5,
    text: "Sehr freundliches Team und saubere Arbeit. Die Terminvereinbarung war unkompliziert."
  },
  {
    name: "Anna W.",
    city: "Düsseldorf",
    rating: 5,
    text: "Unsere Büroräume wirken deutlich gepflegter seit wir den Service nutzen."
  },
  {
    name: "Mustafa Y.",
    city: "Krefeld",
    rating: 5,
    text: "Sehr professionelle Reinigung und gute Kommunikation."
  },
  {
    name: "Ahmed H.",
    city: "Essen",
    rating: 5,
    text: "Wir brauchten kurzfristig Hilfe und der Termin wurde zuverlässig eingehalten."
  },
  {
    name: "Katarzyna P.",
    city: "Oberhausen",
    rating: 5,
    text: "Sehr gründliche Arbeit und freundliche Mitarbeiter."
  },
  {
    name: "Daniel R.",
    city: "Duisburg",
    rating: 5,
    text: "Die Zusammenarbeit verlief unkompliziert und professionell."
  },
  {
    name: "Fatima S.",
    city: "Moers",
    rating: 5,
    text: "Sehr zufrieden mit der Grundreinigung unserer Wohnung."
  },
  {
    name: "Emre T.",
    city: "Düsseldorf",
    rating: 5,
    text: "Sehr zuverlässig und gut organisiert."
  },
  {
    name: "Joanna L.",
    city: "Krefeld",
    rating: 4,
    text: "Termin musste einmal verschoben werden, aber die Arbeit war sehr gut."
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

export const trustPoints = [
  {
    title: "Zuverlässige Einsatzplanung",
    text: "Verbindliche Zeiten, klare Kommunikation und nachvollziehbare Abläufe für Objekte jeder Größe."
  },
  {
    title: "Zwei klare Servicewelten",
    text: "Reinigung und Umzug sind auf der Website klar getrennt, damit Kunden direkt den passenden Einstieg finden."
  },
  {
    title: "Flexible Einsatzgebiete",
    text: "Wir arbeiten flexibel und projektbezogen. Sprechen Sie uns einfach mit Ihrem Vorhaben an."
  }
] as const;

export const aboutValues = [
  "Verlässlichkeit in der Terminplanung und Ausführung",
  "Sorgfalt bei Details und sensiblen Arbeitsumgebungen",
  "Klare Kommunikation ohne übertriebene Versprechen",
  "Kundenorientierung vom Erstkontakt bis zur laufenden Betreuung"
] as const;

export const faqs = [
  {
    question: "Wie schnell können Sie einen Termin anbieten?",
    answer:
      "In vielen Fällen können wir kurzfristig reagieren. Nach einer kurzen Abstimmung zu Objekt, Umfang und Einsatzort nennen wir Ihnen zeitnah einen realistischen Termin."
  },
  {
    question: "Bieten Sie auch regelmäßige Büroreinigung an?",
    answer:
      "Ja. Wir betreuen Büros und gewerbliche Flächen sowohl regelmäßig als auch bei einzelnen Einsätzen. Die Reinigungsintervalle stimmen wir passend zu Ihrem Bedarf ab."
  },
  {
    question: "Wo sind Sie im Einsatz?",
    answer:
      "Wir arbeiten flexibel und projektbezogen. Je nach Art und Umfang des Auftrags prüfen wir die Verfügbarkeit individuell und melden uns mit einer klaren Einschätzung zurück."
  },
  {
    question: "Kann ich ein unverbindliches Angebot anfragen?",
    answer:
      "Selbstverständlich. Nach Ihrer Anfrage prüfen wir die Anforderungen und erstellen ein unverbindliches Angebot mit klarer Leistungsbeschreibung."
  },
  {
    question: "Unterstützen Sie auch bei Umzug und Transport?",
    answer:
      "Ja. Transport- und Umzugsleistungen bieten wir ergänzend an, wenn Kunden mehrere Aufgaben koordiniert aus einer Hand organisieren möchten."
  }
] as const;

export const legalDraftNotice = `Die folgenden Inhalte sind ein strukturierter Entwurf für ${business.name}. Vor dem produktiven Einsatz müssen alle Angaben rechtlich geprüft, vervollständigt und an die tatsächlichen Unternehmensdaten angepasst werden.`;
