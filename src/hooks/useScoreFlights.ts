import { useEffect, useState } from 'react';
import { getScore } from '../services/searchFlight';
import type ScoreResponse from '../types/ScoreResponse';

export const useScoreFlights = (): ScoreResponse | null => {
    const [currentScore, setCurrentScore] = useState<ScoreResponse>();

    useEffect(() => {
        let scoreStats = async () => {
            let stats = await getScore();
            setCurrentScore(stats);
        };
        scoreStats();
    }, []);

    return currentScore ? currentScore : null;
};
