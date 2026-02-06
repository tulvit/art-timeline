import { useEffect, useState } from 'react';
import historyTimelineRaw from './historyTimeline.json';

interface Artist {
  name: string;
  /**
   * Wikipedia page title (not a URL), e.g. "Claude Monet"
   * Used to fetch a Wikimedia-hosted thumbnail via Wikipedia REST API.
   */
  photoWikiTitle?: string;
  /**
   * Wikipedia page title for the artwork, e.g. "Mona Lisa"
   * Used to fetch a Wikimedia-hosted thumbnail via Wikipedia REST API.
   */
  paintingWikiTitle?: string;
  paintingTitle: string;
}

interface CountryGroup {
  country: string;
  artists: Artist[];
}

interface ArtMovement {
  name: string;
  countries: CountryGroup[];
}

interface TimelineItem {
  century: string;
  period: string;
  description: string;
  artMovements: ArtMovement[];
}

type WikiImageState =
  | { status: 'idle' | 'loading'; src: null }
  | { status: 'loaded'; src: string }
  | { status: 'error'; src: null };

const WIKI_SUMMARY_BASE = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const wikiThumbCache = new Map<string, Promise<string | null>>();

async function fetchWikipediaThumbnail(pageTitle: string): Promise<string | null> {
  const url = `${WIKI_SUMMARY_BASE}${encodeURIComponent(pageTitle)}`;
  const res = await fetch(url, {
    headers: { accept: 'application/json' },
  });

  if (!res.ok) return null;

  const data = (await res.json()) as {
    thumbnail?: { source?: string };
    originalimage?: { source?: string };
  };

  return data.thumbnail?.source ?? data.originalimage?.source ?? null;
}

function useWikipediaThumbnail(pageTitle?: string): WikiImageState {
  const [state, setState] = useState<WikiImageState>(() =>
    pageTitle ? { status: 'loading', src: null } : { status: 'idle', src: null },
  );

  useEffect(() => {
    let cancelled = false;

    if (!pageTitle) {
      setState({ status: 'idle', src: null });
      return;
    }

    setState({ status: 'loading', src: null });

    const existing = wikiThumbCache.get(pageTitle);
    const promise =
      existing ??
      (async () => {
        try {
          return await fetchWikipediaThumbnail(pageTitle);
        } catch {
          return null;
        }
      })();

    if (!existing) wikiThumbCache.set(pageTitle, promise);

    promise.then((src) => {
      if (cancelled) return;
      if (src) setState({ status: 'loaded', src });
      else setState({ status: 'error', src: null });
    });

    return () => {
      cancelled = true;
    };
  }, [pageTitle]);

  return state;
}

function WikiImage(props: {
  pageTitle?: string;
  alt: string;
  className: string;
  fallbackSrc: string;
}) {
  const { pageTitle, alt, className, fallbackSrc } = props;
  const state = useWikipediaThumbnail(pageTitle);
  const src = state.status === 'loaded' ? state.src : fallbackSrc;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
}

const historyTimeline = historyTimelineRaw as unknown as TimelineItem[];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">Art History Timeline</h1>
        <p className="text-gray-600 text-center mb-10">History timeline — ancient times to modern era</p>

        <ul className="space-y-6">
          {historyTimeline.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <span className="text-xl font-semibold text-gray-900">{item.century}</span>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

              {/* Era countries (across all movements) */}
              <div className="mt-4">
                {(() => {
                  const byCountry = new Map<string, { name: string; movementNames: Set<string> }[]>();

                  for (const movement of item.artMovements) {
                    for (const group of movement.countries) {
                      for (const artist of group.artists) {
                        const entry = { name: artist.name, movementNames: new Set([movement.name]) };
                        const arr = byCountry.get(group.country);
                        if (!arr) byCountry.set(group.country, [entry]);
                        else {
                          const existing = arr.find((a) => a.name === artist.name);
                          if (existing) existing.movementNames.add(movement.name);
                          else arr.push(entry);
                        }
                      }
                    }
                  }

                  const countries = Array.from(byCountry.entries()).sort((a, b) =>
                    a[0].localeCompare(b[0]),
                  );

                  if (countries.length === 0) return null;

                  return (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Notable countries (this era)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {countries.map(([country, artists]) => (
                          <div key={country}>
                            <div className="text-sm font-semibold text-gray-800 mb-1">{country}</div>
                            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
                              {artists
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((a) => (
                                  <li key={a.name}>
                                    {a.name}{' '}
                                    <span className="text-xs text-gray-500">
                                      ({Array.from(a.movementNames).sort().join(', ')})
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Art Movements */}
              <div className="mt-6 space-y-6">
                {item.artMovements.map((movement, mIndex) => (
                  <div key={mIndex} className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{movement.name}</h3>
                    <div className="space-y-6">
                      {movement.countries.map((group, gIndex) => (
                        <div key={gIndex}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold text-gray-900">{group.country}</span>
                            <span className="text-xs text-gray-500">({group.artists.length} artist{group.artists.length === 1 ? '' : 's'})</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group.artists.map((artist, aIndex) => (
                              <div
                                key={aIndex}
                                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                              >
                                <h4 className="font-semibold text-gray-900 mb-3">{artist.name}</h4>
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">Artist Photo</p>
                                    <WikiImage
                                      pageTitle={artist.photoWikiTitle}
                                      alt={artist.name}
                                      className="w-full h-32 object-cover rounded border border-gray-300"
                                      fallbackSrc="https://via.placeholder.com/200x200?text=Image+Not+Found"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500 mb-1">{artist.paintingTitle}</p>
                                    <WikiImage
                                      pageTitle={artist.paintingWikiTitle}
                                      alt={artist.paintingTitle}
                                      className="w-full h-40 object-cover rounded border border-gray-300"
                                      fallbackSrc="https://via.placeholder.com/400x300?text=Image+Not+Found"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
