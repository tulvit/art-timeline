// Простой интерфейс для контента одного направления
interface MovementContent {
    name: string;
    description: string;
    region: string;
}

export const movements: Record<string, MovementContent> = {
    renaissance: {
        name: "Renaissance",
        description: "A period of cultural, artistic, political and economic 'rebirth' in Europe...",
        region: "Europe (primarily Italy)"
    },
    impressionism: {
        name: "Impressionism",
        description: "A 19th-century art movement...",
        region: "France"
    }
};