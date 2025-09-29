import type AircraftInterface from './AircraftInterface';
import type FlightDataInterface from './FlightDataInterface';

export default interface FlightInterface {
    id: string;
    aircraft: AircraftInterface;
    flightData: FlightDataInterface;
    balance?: boolean;
}
