import axios from 'axios';
import type FlightInterface from '../types/FlightInterface';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

/**
 * Essa função é responsável por realizar uma requisição
 * HTTP do tipo GET na api e entregar os dados do historico
 * e também o número de paginas.
 *
 * @param currentPage - Página atual solicitada.
 * @param limit - Quantidade de registros por página.
 * @returns `Array` - Dados do registro em JSON `FlightInterface[]` e total de páginas `number`.
 */
export const getHistoryFlight = async (
    currentPage: number = 0,
    limit: number = 10
): Promise<[FlightInterface[], number]> => {
    const flightHistory = await axios.get(
        `${baseUrl}?page=${currentPage}&limit=${limit}`
    );

    return [flightHistory.data.flights, flightHistory.data.totalPages];
};

/**
 * Essa função é responsável por realizar uma requisição
 * HTTP do tipo GET na api e entregar os dados de um registro
 * de vôo específico.
 *
 * @param id - Representa o identificador único `number` do registro a ser consultado
 * @returns
 */
export const getFlightDetails = async (
    id: string | number
): Promise<FlightInterface> => {
    const flightDetails = await axios.get(`${baseUrl}/${id}`);
    return flightDetails.data.flight[0];
};
