import { Box, Card, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import FlightComponent from '../components/FlightComponent';
import type FlightInterface from '../types/FlightInterface';
import trophy from '../assets/Trophy_pilops.svg';
import leftArrow from '../assets/LeftArrow_pilops.svg';
import RewardComponent from '../components/RewardComponent';
import { useEffect, useState } from 'react';
import { getFlightDetails } from '../services/searchFlight';

export default function DetailsFlight() {
    const navigate = useNavigate();
    const param = useParams();
    const id: string = param.id!;
    const [current, setCurrent] = useState<FlightInterface>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const currentFlight = async () => {
            try {
                let data = await getFlightDetails(id);
                console.log(data);
                if (data) setCurrent(data);
                else throw new Error('Error on get a flight details');
            } catch (error) {
                console.error('Error on get a flight details: ', error);
            } finally {
                setLoading(false);
            }
        };
        currentFlight();
    }, []);
    return loading ? (
        <p>loading...</p>
    ) : (
        <Box
            component={'section'}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 4
            }}>
            <Stack
                direction="row"
                alignItems="center"
                spacing={4}
                component={'article'}>
                <Box onClick={() => navigate('/api/v1/flight')}>
                    <img
                        style={{ maxHeight: 25 }}
                        src={leftArrow}
                        alt="Icone de seta, interativo para voltar à seção anterior"
                    />
                </Box>
                <Typography variant="h2">Detalhes do Voo</Typography>
            </Stack>
            <Card
                component={'article'}
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
                    balance={current!.flightData.balance}
                    missionBonus={current!.flightData.missionBonus}
                    xp={current!.flightData.xp}
                />
            </Card>
            <FlightComponent
                id={id}
                aircraft={current!.aircraft}
                flightData={current!.flightData}
            />
        </Box>
    );
}
