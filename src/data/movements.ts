export interface MovementData {
    id: string;
    startYear: number;
    endYear: number;
    regionCodes?: string[];
    artistSlugs?: string[];
}

export const movements: MovementData[] = [
    // Prehistoric & Ancient
    { id: "prehistoric-art", startYear: -30000, endYear: -3000, regionCodes: ["FR", "ES", "IT", "CN", "IN"] },
    { id: "ancient-egyptian-art", startYear: -3000, endYear: -30, regionCodes: ["EG"] },
    { id: "mesopotamian-art", startYear: -4000, endYear: -500, regionCodes: ["IQ", "SY", "TR"] },
    { id: "ancient-greek-art", startYear: -800, endYear: -100, regionCodes: ["GR"] },
    { id: "ancient-roman-art", startYear: -500, endYear: 500, regionCodes: ["IT", "FR", "ES", "GB", "DE"] },
    { id: "byzantine-art", startYear: 330, endYear: 1453, regionCodes: ["TR", "GR", "IT"] },
    { id: "medieval-art", startYear: 500, endYear: 1400, regionCodes: ["FR", "DE", "IT", "GB"] },
    { id: "romanesque-art", startYear: 1000, endYear: 1200, regionCodes: ["FR", "DE", "IT", "ES"] },
    { id: "gothic-art", startYear: 1100, endYear: 1400, regionCodes: ["FR", "DE", "IT", "GB"] },

    // Renaissance & Baroque
    { id: "renaissance", startYear: 1400, endYear: 1600, regionCodes: ["IT", "FR", "DE", "NL"] },
    { id: "mannerism", startYear: 1520, endYear: 1600, regionCodes: ["IT", "FR"] },
    { id: "baroque", startYear: 1600, endYear: 1750, regionCodes: ["IT", "FR", "ES", "NL", "DE"] },
    { id: "rococo", startYear: 1700, endYear: 1770, regionCodes: ["FR", "DE", "IT"] },
    { id: "neoclassicism", startYear: 1750, endYear: 1850, regionCodes: ["FR", "IT", "GB", "US"] },
    { id: "romanticism", startYear: 1800, endYear: 1850, regionCodes: ["FR", "DE", "GB", "US"] },
    { id: "realism", startYear: 1840, endYear: 1880, regionCodes: ["FR", "GB", "US"] },

    // Modern & Contemporary
    { id: "impressionism", startYear: 1860, endYear: 1890, regionCodes: ["FR", "US"] },
    { id: "post-impressionism", startYear: 1880, endYear: 1900, regionCodes: ["FR", "NL", "GB"] },
    { id: "symbolism", startYear: 1880, endYear: 1910, regionCodes: ["FR", "BE", "NL"] },
    { id: "art-nouveau", startYear: 1890, endYear: 1910, regionCodes: ["FR", "BE", "ES", "AT"] },
    { id: "fauvism", startYear: 1900, endYear: 1910, regionCodes: ["FR"] },
    { id: "expressionism", startYear: 1905, endYear: 1930, regionCodes: ["DE", "AT", "NO"] },
    { id: "cubism", startYear: 1907, endYear: 1920, regionCodes: ["FR", "ES"] },
    { id: "futurism", startYear: 1909, endYear: 1940, regionCodes: ["IT", "RU"] },
    { id: "constructivism", startYear: 1915, endYear: 1930, regionCodes: ["RU", "DE"] },
    { id: "dada", startYear: 1916, endYear: 1924, regionCodes: ["CH", "DE", "FR", "US"] },
    { id: "surrealism", startYear: 1920, endYear: 1960, regionCodes: ["FR", "ES", "BE", "US"] },
    { id: "abstract-expressionism", startYear: 1940, endYear: 1960, regionCodes: ["US", "GB"] },
    { id: "pop-art", startYear: 1950, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "minimalism", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "conceptual-art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB", "DE"] },
    { id: "postmodernism", startYear: 1970, endYear: 1990, regionCodes: ["US", "FR", "GB"] },
    { id: "contemporary-art", startYear: 1980, endYear: 2025, regionCodes: ["US", "GB", "DE", "FR", "CN"] },

    // Non-Western & Regional
    { id: "chinese-ink-painting", startYear: 200, endYear: 2025, regionCodes: ["CN", "JP", "KR"] },
    { id: "ukiyo-e", startYear: 1600, endYear: 1900, regionCodes: ["JP"] },
    { id: "mughal-art", startYear: 1550, endYear: 1850, regionCodes: ["IN", "PK"] },
    { id: "african-tribal-art", startYear: 1000, endYear: 2025, regionCodes: ["NG", "GH", "CI", "CM"] },
    { id: "pre-columbian-art", startYear: -2000, endYear: 1500, regionCodes: ["MX", "PE", "GT"] },
    { id: "islamic-art", startYear: 700, endYear: 1800, regionCodes: ["IR", "IQ", "SA", "TR"] },

    // 20th‑21st Century Specialized Movements
    { id: "harlem-renaissance", startYear: 1920, endYear: 1930, regionCodes: ["US"] },
    { id: "mexican-muralism", startYear: 1920, endYear: 1950, regionCodes: ["MX"] },
    { id: "socialist-realism", startYear: 1930, endYear: 1950, regionCodes: ["RU", "CN", "DE"] },
    { id: "op-art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "land-art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "feminist-art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB", "DE"] },
    { id: "photorealism", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "street-art", startYear: 1970, endYear: 2025, regionCodes: ["US", "FR", "GB", "BR"] },
    { id: "digital-art", startYear: 1980, endYear: 2025, regionCodes: ["US", "GB", "JP", "KR"] },
    { id: "video-art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE"] },
    { id: "installation-art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE", "JP"] },
    { id: "performance-art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE", "JP"] },
];