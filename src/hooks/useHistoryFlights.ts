import { useEffect, useState } from 'react';
import { getHistoryFlight } from '../services/searchFlight';
import type FlightInterface from '../types/FlightInterface';
import type { UseHistoryReturnType } from '../types/UseHistoryReturnType';

/**
 * Hook personalizado que utiliza a função `getHistoryFlight(currentPage, limit)`
 * para buscar todos os dados do historico de vòo, e retorna os dados para serem
 * exibidos e controlados.
 * 
 * @param currentPage - `number` representa a página atual.
 * @param limit - `number` representa a quantidade de registros a serem recebidos.
 * @returns `{flights, pagesQuantity, loading}` - `flights` representa todos os 
 registros do historico de voos, `pagesQuantity` representa a quantidade de 
 páginas disponíveis, `loading` representa o estado de execução, se estiver
 em andamento `true`, caso já tenha se encerrado `false`.
 */
export const useHistoryFlight = (
    currentPage: number,
    limit: number
): UseHistoryReturnType => {
    const [flights, setFlights] = useState<FlightInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    let [pagesQuantity, setPagesQuantity] = useState<number>(10);

    useEffect(() => {
        const searchFlights = async () => {
            setLoading(true);
            try {
                const [data, totalPages]: [FlightInterface[], number] =
                    await getHistoryFlight(currentPage, limit);
                setFlights(data);
                setPagesQuantity(totalPages);
            } catch (error) {
                console.error('Error on search history: ', error);
            } finally {
                setLoading(false);
            }
        };

        searchFlights();
    }, [currentPage, limit]);

    return { flights, pagesQuantity, loading };
};
