import type FlightInterface from './FlightInterface';

/**
 * Representa o tipo de retorno do hook `useHistoryFlight()`.
 */
export type UseHistoryReturnType = {
    flights: FlightInterface[];
    pagesQuantity: number;
    loading: boolean;
};
