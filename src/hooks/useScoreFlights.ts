import { useEffect, useState } from 'react';
import { getScore } from '../services/searchFlight';
import type ScoreResponse from '../types/ScoreResponse';

/**
 * Hook personalizado que utiliza a função `getScore()`
 * para realizar a requisição à api e obter os detalhes de
 * pontuações referentes ao historio de voos.
 *
 * @returns `{currentScore}` - `currentScore` contém todos os
 * dados correspondentes a dados estatísticos sobre pontuação
 * `ScoreResponse`.
 * - balance: `string` - Total de saldo atingido
 * - xp: `string` - Total de xp adquiridos
 * - missionBonus: `string` - Total de bonus adquiridos
 * - maxBalance: `FlightInterface` - Registro de vôo de maior saldo
 * - minBalance: `FlightInterface` - Registro de vôo de menor saldo
 */
export const useScoreFlights = (): ScoreResponse | null => {
    const [currentScore, setCurrentScore] = useState<ScoreResponse>();

    useEffect(() => {
        let scoreStats = async () => {
            try {
                let stats = await getScore();
                setCurrentScore(stats);
            } catch (error) {
                console.error('Error to get statistics to score.');
            } finally {
            }
        };

        scoreStats();
    }, []);

    return currentScore ? currentScore : null;
};
