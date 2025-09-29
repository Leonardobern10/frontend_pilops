import { Box, Card, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import FlightComponent from '../components/FlightComponent';
import { flights } from '../data/flight';
import type FlightInterface from '../types/FlightInterface';
import trophy from '../assets/Trophy_pilops.svg';
import leftArrow from '../assets/LeftArrow_pilops.svg';
import RewardComponent from '../components/RewardComponent';

export default function DetailsFlight() {
    const navigate = useNavigate();
    const param = useParams();
    const id: string = param.id!;

    const currentFlight: FlightInterface = flights.filter(
        (el) => el.id === id
    )[0];

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 4
            }}>
            <Stack direction="row" alignItems="center" spacing={4}>
                <Box onClick={() => navigate('/flight')}>
                    <img
                        style={{ maxHeight: 25 }}
                        src={leftArrow}
                        alt="Icone de seta, interativo para voltar à seção anterior"
                    />
                </Box>
                <Typography variant="h2">Detalhes do Voo</Typography>
            </Stack>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 5,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingBottom: 4,
                    paddingTop: 2
                }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="fit-content"
                    spacing={2}>
                    <Box>
                        <img
                            src={trophy}
                            alt="Icone de trofeu que acompanha as recompensas"
                        />
                    </Box>
                    <Typography>Recompensas</Typography>
                </Stack>
                <RewardComponent
                    balance={currentFlight.flightData.balance}
                    missionBonus={currentFlight.flightData.missionBonus}
                    xp={currentFlight.flightData.xp}
                />
            </Card>
            <FlightComponent
                id={id}
                aircraft={currentFlight.aircraft}
                flightData={currentFlight.flightData}
            />
        </Box>
    );
}
