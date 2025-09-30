import axios from 'axios';
import type FlightInterface from '../types/FlightInterface';

const baseUrl: string = 'http://localhost:3000/api/v1/flight';

export const getHistoryFlight = async (): Promise<FlightInterface[]> => {
    const flightHistory = await axios.get(baseUrl);
    return flightHistory.data.flights;
};

export const getFlightDetails = async (id: string | number) => {
    const flightDetails = await axios.get(`${baseUrl}/${id}`);
    return flightDetails.data.flight[0];
};
