import type FlightInterface from './FlightInterface';

export type UseDetailsFlightsReturnType = {
    current: FlightInterface | undefined;
    loading: boolean;
};
