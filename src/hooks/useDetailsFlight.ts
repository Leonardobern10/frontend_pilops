import { useEffect, useState } from 'react';
import type FlightInterface from '../types/FlightInterface';
import { getFlightDetails } from '../services/searchFlight';
import type { UseDetailsFlightsReturnType } from '../types/UseDetailsFlightReturnType';

/**
 * Hook personalizado que utiliza a função `getFlightDetails(id)`
 * para realizar a requisição à api e obter os detalhes de um
 * vôo específico.
 *
 * @param id - `string` identificador único de um registro de voo especifico.
 * @returns `{current, loading}` - `current` são todos os dados de um vôo específico
 * e `loading` informa o estado da requisição, se está em andamando `true` ou se
 * encerrou `false`.
 */
export const useDetailsFlight = (id: string): UseDetailsFlightsReturnType => {
    const [currentFlight, setCurrentFlight] = useState<FlightInterface>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCurrentFlight = async (id: string) => {
            setLoading(true);
            try {
                let data = await getFlightDetails(id);
                if (data) setCurrentFlight(data);
                else throw new Error('Error on get a flight details');
            } catch (error) {
                console.error('Error on get a flight details: ', error);
            } finally {
                setLoading(false);
            }
        };
        getCurrentFlight(id);
    }, [id]);
    return { current: currentFlight, loading };
};
