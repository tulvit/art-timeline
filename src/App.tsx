import { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { movements } from './data/movements';
import { localeConfig, getPathForLocale, type LocaleCode } from './i18n';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const sortedMovements = [...movements].sort((a, b) => a.startYear - b.startYear);

const VALID_LOCALES: LocaleCode[] = ['en', 'fr', 'ru'];

function isValidLocale(locale: string | undefined): locale is LocaleCode {
  return locale !== undefined && VALID_LOCALES.includes(locale as LocaleCode);
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BC`;
  return `${year}`;
}

function TimelineContent({ locale }: { locale: LocaleCode }) {
  const t = localeConfig[locale].common;

  return (
    <>
      <h1
        className="text-4xl font-semibold text-center tracking-tight mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--art-text)' }}
      >
        {t.siteTitle}
      </h1>
      <p className="text-center text-lg mb-12" style={{ color: 'var(--art-text-muted)' }}>
        {t.siteSlogan}
      </p>

      <div className="relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px"
          style={{ background: 'var(--art-accent)' }}
          aria-hidden
        />
        {sortedMovements.map((m, i) => (
          <div
            key={m.id}
            className={`relative flex items-stretch gap-6 mb-8 last:mb-0 ${
              i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div
              className={`flex-1 flex items-center ${
                i % 2 === 0 ? 'justify-end pr-6' : 'justify-start pl-6'
              }`}
            >
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: 'var(--art-text-muted)' }}
              >
                {formatYear(m.startYear)} – {formatYear(m.endYear)}
              </span>
            </div>
            <div
              className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full mt-1"
              style={{
                background: 'var(--art-accent)',
                boxShadow: '0 0 0 4px var(--art-accent-soft)',
              }}
            />
            <div
              className={`flex-1 flex items-stretch ${i % 2 === 0 ? 'pl-6' : 'pr-6'}`}
            >
              <div
                className="flex-1 rounded-xl border p-4 text-left transition-shadow hover:shadow-lg"
                style={{
                  background: 'var(--art-surface)',
                  borderColor: 'var(--art-border)',
                  color: 'var(--art-text)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <h3 className="text-lg font-semibold" style={{ color: 'var(--art-text)' }}>
                  {m.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--art-text-muted)' }}>
                  Regions: {m.regionCodes.join(', ')}
                </p>
                <p className="text-xs mt-2" style={{ color: 'var(--art-text-faint)' }}>
                  ID: {m.id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TimelinePage() {
  const { locale: localeParam } = useParams();
  const navigate = useNavigate();
  const locale: LocaleCode = isValidLocale(localeParam) ? localeParam : 'en';

  useEffect(() => {
    document.documentElement.lang = locale === 'ru' ? 'ru' : locale === 'fr' ? 'fr' : 'en';
  }, [locale]);

  function handleLocaleChange(newLocale: LocaleCode) {
    navigate(getPathForLocale(newLocale));
  }

  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{ background: 'var(--art-bg)', color: 'var(--art-text)' }}
    >
      <header className="fixed top-0 right-0 p-4 z-50">
        <LanguageSwitcher currentLocale={locale} onLocaleChange={handleLocaleChange} />
      </header>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <TimelineContent locale={locale} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:locale?" element={<TimelinePage />} />
    </Routes>
  );
}

export default App;
