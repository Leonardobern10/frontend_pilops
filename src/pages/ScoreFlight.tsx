import { Box, Card, Typography } from '@mui/material';
import { useEffect, useState, type ReactElement } from 'react';
import { getScore } from '../services/searchFlight';
import type ScoreResponse from '../types/ScoreResponse';
import RewardComponent from '../components/RewardComponent';
import FlightComponent from '../components/FlightComponent';
import HistoryFlightContainer from '../components/ui/HistoryFlightContainer';

export default function ScoreFlight(): ReactElement {
    const [currentScore, setCurrentScore] = useState<ScoreResponse>();

    useEffect(() => {
        let score = async () => {
            let stats = await getScore();
            setCurrentScore(stats);
        };
        score();
    }, []);

    return (
        <Box>
            {currentScore ? (
                <HistoryFlightContainer>
                    <Typography variant="h2">Ganhos Totais</Typography>
                    <Card sx={{ padding: 4 }}>
                        <RewardComponent
                            balance={Number(currentScore.balance)}
                            xp={Number(currentScore.xp)}
                            missionBonus={Number(currentScore.missionBonus)}
                        />
                    </Card>
                    <Box>
                        <Typography variant="subtitle1">
                            Melhor pontuação
                        </Typography>
                        <FlightComponent
                            id={currentScore.maxBalance.id}
                            aircraft={currentScore.maxBalance.aircraft}
                            flightData={currentScore.maxBalance.flightData}
                            balance
                        />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            Pior pontuação
                        </Typography>
                        <FlightComponent
                            id={currentScore.minBalance.id}
                            aircraft={currentScore.minBalance.aircraft}
                            flightData={currentScore.minBalance.flightData}
                            balance
                        />
                    </Box>
                </HistoryFlightContainer>
            ) : (
                <Box>Não foi possivel obter os registro estatísticos.</Box>
            )}
        </Box>
    );
}
