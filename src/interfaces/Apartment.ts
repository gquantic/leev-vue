export interface Apartment {
    id: number;
    name: {
        En: string;
        Fr: string;
    };
    price: number;
    size: number;
    rooms: number;
    bathrooms: number;
    image: string;
    description: string;
    long_description: {
        En: string;
        Fr: string;
    };
    address: string;
    latitude: number;
    longitude: number;
    phone: string;
    email: string;
    website: string;
    created_at: string;
    updated_at: string;
    cover: string;
    objectTypes: {
        0: {
            id: number;
            name: {
                En: string;
                Fr: string;
            };
            created_at: string;
            updated_at: string;
        }
    },
    services: TServices[];
    advantages: Advatages[];
    photos: Photos;
    photo: string;
    guests: Guests;
}

interface Guests {
    Adult: number;
    Children: number;
    baby: number;
}

interface TServices {
    id: number;
    name: {
        En: string;
        Fr: string;
    };
    created_at: string;
    updated_at: string;
}

interface Advatages {
    id: number;
    name: {
        En: string;
        Fr: string;
    };
    created_at: string;
    updated_at: string;
}

type Photos = Record<number, string>;