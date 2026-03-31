export type NewsItem = {
  title: string;
  text: string;
  date: string;
  image?: string;
  imageAlt?: string;
  unread?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    title: "Neue Reinigungsangebote im Frühling",
    text: "Für Büros, Praxen und Gewerbeflächen bieten wir im Frühling abgestimmte Reinigungspakete mit flexiblen Intervallen an.",
    date: "31. März 2026",
    image: "/images/gallery/reinigung/reinigung-4.jpeg",
    imageAlt: "Reinigungsteam in einem modernen Büro",
    unread: true
  },
  {
    title: "Projekt-Update: Erweiterter Transporteinsatz",
    text: "Unser Transportservice unterstützt jetzt noch strukturierter bei kurzfristigen Umzügen, Direktfahrten und gewerblichen Einsätzen.",
    date: "24. März 2026",
    image: "/images/gallery/umzug/umzug-8.jpeg",
    imageAlt: "Transportfahrzeug von Blitz Service GmbH"
  },
  {
    title: "Mehr Einblicke in reale Arbeitsbeispiele",
    text: "Auf unseren Service-Seiten zeigen wir jetzt zusätzliche Fotos aus Reinigung, Umzug und Transport, damit Leistungen noch greifbarer werden.",
    date: "18. März 2026"
  }
];

export const unreadNewsCount = newsItems.filter((item) => item.unread).length;
