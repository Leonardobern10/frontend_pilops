import { Box, Grid, Typography } from '@mui/material';
import { flights } from '../data/flight';
import FlightComponent from '../components/FlightComponent';

export default function HistoryFlight() {
    return (
        <Box
            sx={{
                width: '100%'
            }}>
            <Typography variant="h1">Histórico de Voos</Typography>
            <Typography variant="h3">
                Visualize seu histórico completo de voos realizados
            </Typography>
            <Grid direction="column">
                {flights.map((el) => (
                    <FlightComponent
                        key={el.id}
                        id={el.id}
                        aircraft={el.aircraft}
                        flightData={el.flightData}
                    />
                ))}
            </Grid>
        </Box>
    );
}
