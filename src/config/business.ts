export const business = {
  name: "Blitz Service GmbH",
  legalName: "Blitz Service GmbH",
  shortDescription:
    "Professionelle Reinigungs- und Transportdienstleistungen mit Fokus auf Sauberkeit, Verlässlichkeit und termingerechte Ausführung.",
  address: {
    street: "Musterstraße 1",
    postalCode: "00000",
    city: "Musterstadt",
    country: "Deutschland"
  },
  phone: "+49 0000 000000",
  email: "kontakt@blitz-service.de",
  managingDirector: "Max Mustermann",
  vatId: "DE123456789",
  commercialRegister: "Amtsgericht Musterstadt, HRB 12345",
  businessHours: [
    "Montag bis Freitag: 08:00 - 18:00 Uhr",
    "Samstag: Nach Vereinbarung"
  ],
  serviceAreas: ["Düsseldorf", "Duisburg", "Essen", "Krefeld", "Umgebung"],
  ctaPrimary: "Kostenloses Angebot",
  ctaSecondary: "Jetzt anfragen",
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: ""
  }
} as const;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.country}`;
