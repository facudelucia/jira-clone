interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'anashe',
            createdAt: Date.now(),
            status: 'pending'
        },
        {
            description: 'anashe',
            createdAt: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            description: 'anashe',
            createdAt: Date.now() - 100000,
            status: 'finished'
        }
    ]
}