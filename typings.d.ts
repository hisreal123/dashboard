
export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    address: {
        address: string;
        city: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        postalCode: string;
        state: string;
    };
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    birthDate: string;
    bloodGroup: string;
    company: {
        address: {
            address: string;
            city: string;
            coordinates: {
                latitude: number;
                longitude: number;
            };
            postalCode: string;
            state: string;
        };
        department: string;
        name: string;
        title: string;
    };
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    gender: string;
    hair: {
        color: string;
        type: string;
    };
    height: number;
    image: string;
    ip: string;
    macAddress: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number;
    // add other properties as needed
}