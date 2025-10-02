import type FlightInterface from './FlightInterface';

export default interface ScoreResponse {
    balance: string;
    xp: string;
    missionBonus: string;
    maxBalance: FlightInterface;
    minBalance: FlightInterface;
}
