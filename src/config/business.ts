export const business = {
  name: "Blitz Service GmbH",
  legalName: "Blitz Service GmbH",
  legalForm: "Gesellschaft mit beschränkter Haftung (GmbH)",
  domain: "blitzservic.de",
  shortDescription:
    "Professionelle Reinigung und ergänzende Umzugs- und Transportleistungen mit klarer Kommunikation, strukturierter Ausführung und flexiblem Einsatzgebiet.",
  address: {
    street: "Zwickauer Str. 23",
    postalCode: "47443",
    city: "Moers",
    country: "Deutschland"
  },
  phones: {
    landline: "02841 6004743",
    office: "02841 6004743",
    managingDirector: "02841 6004743"
  },
  phone: "02841 6004743",
  whatsappNumber: "+4917615130442",
  email: "info@blitzservic.de",
  managingDirector: "Othman Hasan",
  registerCourt: "Amtsgericht Kleve",
  commercialRegisterNumber: "HRB 20203",
  commercialRegister: "Amtsgericht Kleve, HRB 20203",
  vatId: "DE454824077",
  contentResponsible: "Othman Hasan",
  businessHours: [
    "Montag bis Freitag: 08:00 - 18:00 Uhr",
    "Samstag: Nach Vereinbarung"
  ],
  serviceAreas: [
    "Flexible Einsatzgebiete auf Anfrage",
    "Projektbezogene regionale Betreuung",
    "Breite Verfügbarkeit je nach Auftragsumfang"
  ],
  ctaPrimary: "Kostenloses Angebot anfragen",
  ctaSecondary: "Kontakt",
  trackingUsesConsentBanner: false,
  imageAttribution: [
    {
      label: "Pexels",
      note: "Einzelne Website-Bilder stammen aus lizenzfreien Quellen mit kommerzieller Nutzung gemäß den jeweils geltenden Lizenzbedingungen."
    },
    {
      label: "Eigene / lokal erstellte Grafiken",
      note: "Zusätzliche Illustrationen und SVG-Grafiken wurden projektbezogen lokal erstellt."
    }
  ],
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: ""
  }
} as const;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.country}`;

export const contactAnchorId = "kontakt-formular";

export const phoneHref = `tel:${business.phones.landline.replace(/\D/g, "")}`;

export const whatsappHref = `https://wa.me/${business.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hallo, ich interessiere mich für Ihre Dienstleistung."
)}`;
