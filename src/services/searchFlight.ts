import axios from 'axios';
import type FlightInterface from '../types/FlightInterface';

const baseUrl: string = 'http://localhost:3000/api/v1/flights';

export const getHistoryFlight = async (
    currentPage: number = 0,
    limit: number = 10
): Promise<[FlightInterface[], number]> => {
    const flightHistory = await axios.get(
        `${baseUrl}?page=${currentPage}&limit=${limit}`
    );

    return [flightHistory.data.flights, flightHistory.data.totalPages];
};

export const getFlightDetails = async (id: string | number) => {
    const flightDetails = await axios.get(`${baseUrl}/${id}`);
    return flightDetails.data.flight[0];
};
