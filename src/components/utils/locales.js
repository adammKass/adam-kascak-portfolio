export const locales = ["sk", "en"];
export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
