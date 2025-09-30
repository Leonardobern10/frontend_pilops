import { Box, Stack, Typography } from '@mui/material';
import FlightComponent from '../components/FlightComponent';
import { getHistoryFlight } from '../services/searchFlight';
import type FlightInterface from '../types/FlightInterface';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

export default function HistoryFlight() {
    const [flights, setFlights] = useState<FlightInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    let [pagesQuantity, setPagesQuantity] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const getFlights = async () => {
            try {
                const [data, totalPages] = await getHistoryFlight();
                console.log(data);
                setFlights(data);
                setPagesQuantity(totalPages);
            } catch (error) {
                console.error('Error on search history: ', error);
            } finally {
                setLoading(false);
            }
        };
        getFlights();
    }, []);

    return (
        <Box component={'main'} sx={{ height: '100%' }}>
            {loading ? (
                <Loading />
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
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
                    <Stack direction="row" spacing={2}>
                        {Array.from({ length: pagesQuantity }, (_, i) => (
                            <p>{i}</p>
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
}
