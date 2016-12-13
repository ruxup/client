export interface Event {
    id: number;
    name: string;
    location: string;
    start_time: Date;
    end_time: Date;
    description: string;
    image: string;
    category: string;
    owner_id: number;
}