export interface Activity {
    id: string;
    title: string;
    date: Date | null;
    description: string | null;
    category: string | null;
    city: string | null;
    venue: string | null;
}
