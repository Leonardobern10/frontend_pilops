import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import FlightComponent from '../components/FlightComponent';
import { getHistoryFlight } from '../services/searchFlight';
import type FlightInterface from '../types/FlightInterface';
import { useEffect, useState } from 'react';

export default function HistoryFlight() {
    const [flights, setFlights] = useState<FlightInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getFlights = async () => {
            try {
                const data = await getHistoryFlight();
                setFlights(data);
            } catch (error) {
                console.error('Error on search history: ', error);
            } finally {
                setLoading(false);
            }
        };

        getFlights();
    }, []);

    return loading ? (
        <Box sx={{ height: '100%' }}>
            <Typography variant="body1">
                Carregando...
                <span>
                    <CircularProgress />
                </span>
            </Typography>
        </Box>
    ) : (
        <Box
            component={'main'}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                rowGap: 4
            }}>
            <Box>
                <Typography variant="h1">Histórico de Voos</Typography>
                <Typography variant="subtitle1">
                    Visualize seu histórico completo de voos realizados
                </Typography>
            </Box>
            <Box
                component={'section'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    rowGap: 4
                }}>
                {flights.map((el) => (
                    <FlightComponent
                        key={el.id}
                        id={el.id}
                        aircraft={el.aircraft}
                        flightData={el.flightData}
                        balance
                    />
                ))}
            </Box>
        </Box>
    );
}
