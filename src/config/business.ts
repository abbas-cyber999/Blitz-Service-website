export const business = {
  name: "Blitz Service GmbH",
  legalName: "Blitz Service GmbH",
  domain: "blitzservic.de",
  shortDescription:
    "Professionelle Reinigungsleistungen mit Fokus auf Sauberkeit, Verlässlichkeit und schnelle, strukturierte Ausführung.",
  address: {
    street: "Zwickauer Str. 23",
    postalCode: "47443",
    city: "Moers",
    country: "Deutschland"
  },
  phones: {
    managingDirector: "0179 6995057",
    office: "0176 15130442"
  },
  phone: "0179 6995057",
  whatsappNumber: "+4917615130442",
  email: "info@blitzservic.de",
  managingDirector: "Geschäftsführer",
  vatId: "DE123456789",
  commercialRegister: "Amtsgericht Musterstadt, HRB 12345",
  businessHours: [
    "Montag bis Freitag: 08:00 - 18:00 Uhr",
    "Samstag: Nach Vereinbarung"
  ],
  serviceAreas: ["Moers", "Duisburg", "Krefeld", "Düsseldorf", "Niederrhein"],
  ctaPrimary: "Kostenloses Angebot",
  ctaSecondary: "Jetzt anfragen",
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: ""
  }
} as const;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.country}`;

export const contactAnchorId = "kontakt-formular";

export const whatsappHref = `https://wa.me/${business.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Guten Tag, ich interessiere mich für ein Angebot von Blitz Service GmbH."
)}`;
