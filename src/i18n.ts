import { commonEn } from './locales/en/common';
import { commonFr } from './locales/fr/common';
import { commonRu } from './locales/ru/common';

export type LocaleCode = 'en' | 'fr' | 'ru';

export const LOCALES: LocaleCode[] = ['en', 'fr', 'ru'];

export const localeConfig: Record<
  LocaleCode,
  { label: string; flag: string; common: { siteTitle: string; siteSlogan: string } }
> = {
  en: {
    label: 'English',
    flag: '🇬🇧',
    common: commonEn,
  },
  fr: {
    label: 'Français',
    flag: '🇫🇷',
    common: commonFr,
  },
  ru: {
    label: 'Русский',
    flag: '🇷🇺',
    common: commonRu,
  },
};

export function getLocaleFromPath(pathname: string): LocaleCode {
  const segment = pathname.replace(/^\//, '').split('/')[0];
  if (segment === 'fr' || segment === 'ru') return segment;
  return 'en';
}

export function getPathForLocale(locale: LocaleCode): string {
  return locale === 'en' ? '/' : `/${locale}`;
}
