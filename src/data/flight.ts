import type FlightInterface from '../types/FlightInterface';

export const flights: Array<FlightInterface> = [
    {
        id: 'FL-001',
        aircraft: {
            name: 'Cessna 172 G1000',
            registration: 'PR-PNK',
            airline: 'Pilops Academy'
        },
        flightData: {
            date: '2025-07-22',
            balance: 1065,
            route: {
                from: 'SBRJ',
                to: 'SBFZ'
            },
            xp: 445,
            missionBonus: 0
        }
    },
    {
        id: 'FL-002',
        aircraft: {
            name: 'Cessna 172 G1000',
            registration: 'PR-PNK',
            airline: 'Pilops Academy'
        },
        flightData: {
            date: '2025-07-22',
            balance: 1065,
            route: {
                from: 'SBRJ',
                to: 'SBFZ'
            },
            xp: 445,
            missionBonus: 0
        }
    }
];
