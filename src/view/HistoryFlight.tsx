import { Box, Typography } from '@mui/material';
import { flights } from '../data/flight';
import FlightComponent from '../components/FlightComponent';

export default function HistoryFlight() {
    return (
        <Box
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
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    rowGap: 4,
                    height: '100%'
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
