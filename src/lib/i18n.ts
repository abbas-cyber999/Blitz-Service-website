export type LocaleCode = "en" | "ar";

export const localeConfig: Record<LocaleCode, { label: string; direction: "ltr" | "rtl" }> = {
  en: {
    label: "English",
    direction: "ltr"
  },
  ar: {
    label: "Arabic",
    direction: "rtl"
  }
};

export function getLocaleDirection(locale: LocaleCode) {
  return localeConfig[locale].direction;
}

export function isRtlLocale(locale: LocaleCode) {
  return getLocaleDirection(locale) === "rtl";
}
