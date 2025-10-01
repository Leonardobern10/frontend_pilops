import type RouteInterface from './RouteInterface';

/**
 * Representa a tipagem para a propridade flightData,
 * presente nos dados `flight`.
 */
export default interface FlightDataInterface {
    date: string;
    balance: number;
    route: RouteInterface;
    xp: number;
    missionBonus: number;
}
