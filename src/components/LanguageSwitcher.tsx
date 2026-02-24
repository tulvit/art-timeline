import { useState, useRef, useEffect } from 'react';
import { localeConfig, type LocaleCode } from '../i18n';

type Props = {
  currentLocale: LocaleCode;
  onLocaleChange: (locale: LocaleCode) => void;
};

export function LanguageSwitcher({ currentLocale, onLocaleChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = localeConfig[currentLocale];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors hover:opacity-90"
        style={{
          borderColor: 'var(--art-border)',
          background: 'var(--art-surface)',
          color: 'var(--art-text)',
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="text-xl" aria-hidden>
          {current.flag}
        </span>
        <span className="text-sm font-medium hidden sm:inline">{current.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 py-1 rounded-lg border shadow-lg min-w-[140px] z-50"
          style={{
            borderColor: 'var(--art-border)',
            background: 'var(--art-surface)',
          }}
        >
          {(Object.keys(localeConfig) as LocaleCode[]).map((code) => (
            <li key={code} role="option">
              <button
                type="button"
                onClick={() => {
                  onLocaleChange(code);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm transition-colors ${
                  code === currentLocale ? 'opacity-100' : 'hover:opacity-80'
                }`}
                style={{ color: 'var(--art-text)' }}
              >
                <span className="text-xl">{localeConfig[code].flag}</span>
                {localeConfig[code].label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
