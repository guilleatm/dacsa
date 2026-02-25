import es from './es.json';
import ca from './ca.json';
import en from './en.json';

const translations = { es, ca, en };

export type Locale = 'es' | 'ca' | 'en';

export function t(locale: Locale, key: string): string {
  return (translations[locale] as Record<string, string>)[key] ?? key;
}

export function getLocalePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}
