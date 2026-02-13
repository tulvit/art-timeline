export interface MovementData {
    id: string;
    name: string;
    startYear: number;
    endYear: number;
    regionCodes: string[];
}

export const movements: MovementData[] = [
    // Prehistoric & Ancient
    { id: "prehistoric-art", name: "Prehistoric Art", startYear: -30000, endYear: -3000, regionCodes: ["FR", "ES", "IT", "CN", "IN"] },
    { id: "ancient-egyptian-art", name: "Ancient Egyptian Art", startYear: -3000, endYear: -30, regionCodes: ["EG"] },
    { id: "mesopotamian-art", name: "Mesopotamian Art", startYear: -4000, endYear: -500, regionCodes: ["IQ", "SY", "TR"] },
    { id: "ancient-greek-art", name: "Ancient Greek Art", startYear: -800, endYear: -100, regionCodes: ["GR"] },
    { id: "ancient-roman-art", name: "Ancient Roman Art", startYear: -500, endYear: 500, regionCodes: ["IT", "FR", "ES", "GB", "DE"] },
    { id: "byzantine-art", name: "Byzantine Art", startYear: 330, endYear: 1453, regionCodes: ["TR", "GR", "IT"] },
    { id: "medieval-art", name: "Medieval Art", startYear: 500, endYear: 1400, regionCodes: ["FR", "DE", "IT", "GB"] },
    { id: "romanesque-art", name: "Romanesque Art", startYear: 1000, endYear: 1200, regionCodes: ["FR", "DE", "IT", "ES"] },
    { id: "gothic-art", name: "Gothic Art", startYear: 1100, endYear: 1400, regionCodes: ["FR", "DE", "IT", "GB"] },

    // Renaissance & Baroque
    { id: "renaissance", name: "Renaissance", startYear: 1400, endYear: 1600, regionCodes: ["IT", "FR", "DE", "NL"] },
    { id: "mannerism", name: "Mannerism", startYear: 1520, endYear: 1600, regionCodes: ["IT", "FR"] },
    { id: "baroque", name: "Baroque", startYear: 1600, endYear: 1750, regionCodes: ["IT", "FR", "ES", "NL", "DE"] },
    { id: "rococo", name: "Rococo", startYear: 1700, endYear: 1770, regionCodes: ["FR", "DE", "IT"] },
    { id: "neoclassicism", name: "Neoclassicism", startYear: 1750, endYear: 1850, regionCodes: ["FR", "IT", "GB", "US"] },
    { id: "romanticism", name: "Romanticism", startYear: 1800, endYear: 1850, regionCodes: ["FR", "DE", "GB", "US"] },
    { id: "realism", name: "Realism", startYear: 1840, endYear: 1880, regionCodes: ["FR", "GB", "US"] },

    // Modern & Contemporary
    { id: "impressionism", name: "Impressionism", startYear: 1860, endYear: 1890, regionCodes: ["FR", "US"] },
    { id: "post-impressionism", name: "Post-Impressionism", startYear: 1880, endYear: 1900, regionCodes: ["FR", "NL", "GB"] },
    { id: "symbolism", name: "Symbolism", startYear: 1880, endYear: 1910, regionCodes: ["FR", "BE", "NL"] },
    { id: "art-nouveau", name: "Art Nouveau", startYear: 1890, endYear: 1910, regionCodes: ["FR", "BE", "ES", "AT"] },
    { id: "fauvism", name: "Fauvism", startYear: 1900, endYear: 1910, regionCodes: ["FR"] },
    { id: "expressionism", name: "Expressionism", startYear: 1905, endYear: 1930, regionCodes: ["DE", "AT", "NO"] },
    { id: "cubism", name: "Cubism", startYear: 1907, endYear: 1920, regionCodes: ["FR", "ES"] },
    { id: "futurism", name: "Futurism", startYear: 1909, endYear: 1940, regionCodes: ["IT", "RU"] },
    { id: "constructivism", name: "Constructivism", startYear: 1915, endYear: 1930, regionCodes: ["RU", "DE"] },
    { id: "dada", name: "Dada", startYear: 1916, endYear: 1924, regionCodes: ["CH", "DE", "FR", "US"] },
    { id: "surrealism", name: "Surrealism", startYear: 1920, endYear: 1960, regionCodes: ["FR", "ES", "BE", "US"] },
    { id: "abstract-expressionism", name: "Abstract Expressionism", startYear: 1940, endYear: 1960, regionCodes: ["US", "GB"] },
    { id: "pop-art", name: "Pop Art", startYear: 1950, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "minimalism", name: "Minimalism", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "conceptual-art", name: "Conceptual Art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB", "DE"] },
    { id: "postmodernism", name: "Postmodernism", startYear: 1970, endYear: 1990, regionCodes: ["US", "FR", "GB"] },
    { id: "contemporary-art", name: "Contemporary Art", startYear: 1980, endYear: 2025, regionCodes: ["US", "GB", "DE", "FR", "CN"] },

    // Non-Western & Regional
    { id: "chinese-ink-painting", name: "Chinese Ink Painting", startYear: 200, endYear: 2025, regionCodes: ["CN", "JP", "KR"] },
    { id: "ukiyo-e", name: "Ukiyo-e", startYear: 1600, endYear: 1900, regionCodes: ["JP"] },
    { id: "mughal-art", name: "Mughal Art", startYear: 1550, endYear: 1850, regionCodes: ["IN", "PK"] },
    { id: "african-tribal-art", name: "African Tribal Art", startYear: 1000, endYear: 2025, regionCodes: ["NG", "GH", "CI", "CM"] },
    { id: "pre-columbian-art", name: "Pre-Columbian Art", startYear: -2000, endYear: 1500, regionCodes: ["MX", "PE", "GT"] },
    { id: "islamic-art", name: "Islamic Art", startYear: 700, endYear: 1800, regionCodes: ["IR", "IQ", "SA", "TR"] },

    // 20th‑21st Century Specialized Movements
    { id: "harlem-renaissance", name: "Harlem Renaissance", startYear: 1920, endYear: 1930, regionCodes: ["US"] },
    { id: "mexican-muralism", name: "Mexican Muralism", startYear: 1920, endYear: 1950, regionCodes: ["MX"] },
    { id: "socialist-realism", name: "Socialist Realism", startYear: 1930, endYear: 1950, regionCodes: ["RU", "CN", "DE"] },
    { id: "op-art", name: "Op Art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "land-art", name: "Land Art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "feminist-art", name: "Feminist Art", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB", "DE"] },
    { id: "photorealism", name: "Photorealism", startYear: 1960, endYear: 1970, regionCodes: ["US", "GB"] },
    { id: "street-art", name: "Street Art", startYear: 1970, endYear: 2025, regionCodes: ["US", "FR", "GB", "BR"] },
    { id: "digital-art", name: "Digital Art", startYear: 1980, endYear: 2025, regionCodes: ["US", "GB", "JP", "KR"] },
    { id: "video-art", name: "Video Art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE"] },
    { id: "installation-art", name: "Installation Art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE", "JP"] },
    { id: "performance-art", name: "Performance Art", startYear: 1960, endYear: 2025, regionCodes: ["US", "GB", "DE", "JP"] },
];