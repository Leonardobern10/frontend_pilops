import { Box, Card, Typography } from '@mui/material';
import type ScoreResponse from '../types/ScoreResponse';
import RewardComponent from '../components/RewardComponent';
import FlightComponent from '../components/FlightComponent';
import HistoryFlightContainer from '../components/ui/HistoryFlightContainer';
import { useScoreFlights } from '../hooks/useScoreFlights';
import type { ReactElement } from 'react';
import Loading from '../components/Loading';
import IconComponent from '../components/IconComponent';
import leftArrow from '../assets/LeftArrow_pilops.svg';

/**
 * Componente que abriga dos dados sobre pontuação
 * atingidos no historico de voo.
 *
 * @returns
 */
export default function ScoreFlight(): ReactElement {
    const [currentScore, loading]: [ScoreResponse, boolean] = useScoreFlights();

    return (
        <Box>
            {loading ? (
                <Loading />
            ) : currentScore ? (
                <HistoryFlightContainer>
                    <Box>
                        <IconComponent
                            titleSection="Pontuação geral"
                            iconImage={leftArrow}
                            iconAlt="Icone de seta, interativo para voltar à seção anterior"
                        />
                    </Box>
                    <Card sx={sx.card}>
                        <RewardComponent
                            balance={Number(currentScore.balance)}
                            xp={Number(currentScore.xp)}
                            missionBonus={Number(currentScore.missionBonus)}
                        />
                    </Card>
                    {currentScore.maxBalance && (
                        <Box>
                            <Typography variant="subtitle1">
                                Maior pontuação
                            </Typography>
                            <FlightComponent
                                id={currentScore.maxBalance.id}
                                aircraft={currentScore.maxBalance.aircraft}
                                flightData={currentScore.maxBalance.flightData}
                                balance
                            />
                        </Box>
                    )}
                    {currentScore.minBalance && (
                        <Box>
                            <Typography variant="subtitle1">
                                Menor pontuação
                            </Typography>
                            <FlightComponent
                                id={currentScore.minBalance.id}
                                aircraft={currentScore.minBalance.aircraft}
                                flightData={currentScore.minBalance.flightData}
                                balance
                            />
                        </Box>
                    )}
                </HistoryFlightContainer>
            ) : (
                <Typography variant="h2" color="error">
                    Não foi possivel obter os registros estatísticos.
                </Typography>
            )}
        </Box>
    );
}

const sx = {
    card: {
        padding: 4
    }
};
