import { Box, Typography } from '@mui/material';
import FlightComponent from '../components/FlightComponent';
import { useState } from 'react';
import Loading from '../components/Loading';
import { useHistoryFlight } from '../hooks/useHistoryFlights';
import type { UseHistoryReturnType } from '../types/UseHistoryReturnType';
import HistoryFlightContainer from '../components/ui/HistoryFlightContainer';
import AllFlightsContainer from '../components/ui/AllFlightsContainer';
import PaginationComponent from '../components/PaginationComponent';

const boxStyle = {
    height: '100%'
};

/**
 * Pagina responsável por exibir os todas as informações
 * com os registros que compõem o historico de voo
 */
export default function HistoryFlight() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const length: number = 10;

    const { flights, pagesQuantity, loading }: UseHistoryReturnType =
        useHistoryFlight(currentPage, length);

    return (
        <Box component={'main'} sx={boxStyle}>
            {loading ? (
                <Loading />
            ) : (
                <HistoryFlightContainer>
                    <Box>
                        <Typography variant="h2">Histórico de Voos</Typography>
                        <Typography variant="subtitle1">
                            Visualize seu histórico completo de voos realizados
                        </Typography>
                    </Box>
                    <AllFlightsContainer>
                        {flights.map((el) => (
                            <FlightComponent
                                key={el.id}
                                id={el.id}
                                aircraft={el.aircraft}
                                flightData={el.flightData}
                                balance
                            />
                        ))}
                    </AllFlightsContainer>
                    <PaginationComponent
                        pagesQuantity={pagesQuantity}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </HistoryFlightContainer>
            )}
        </Box>
    );
}
