import { Card } from '@mui/material';
import type { ReactElement } from 'react';
import type FlightInterface from '../types/FlightInterface';
import AircraftInfo from './AircraftInfo';
import RouteComponent from './RouteComponent';
import DetailFlight from './DetailFlight';
import { useNavigate } from 'react-router';

/**
 * Componente responsável por exibir todas as informações
 * pertinentes à um registro no histórico de vôos.
 *
 * @param id - Representa o identificador único de um vôo.
 * @param aircraft - Representa as informações do avião.
 * @param flightData - Representa as informações sobre o vôo.
 * @param balance - Recebe `true` quando o componente
 * deve exibir um valor de saldo (balance), ou `false` quando o componente
 * não recebe um valor de saldo (balance). Para cada ocasião, existe
 * um comportamento diferente, mas a estilização permanece a mesma.
 * @returns Componente React.
 */
export default function FlightComponent({
    id,
    aircraft,
    flightData,
    balance
}: FlightInterface): ReactElement {
    const navigate = useNavigate();
    return (
        <Card
            component={'article'}
            onClick={() => navigate(`/api/v1/flight/${id}`)}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                height: 'fit-content',
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 2,
                paddingTop: 2,
                columnGap: 15
            }}>
            <AircraftInfo name={aircraft.name} airline={aircraft.airline} />
            <RouteComponent
                trajeto="Trajeto"
                from={flightData.route.from}
                to={flightData.route.to}
            />
            <DetailFlight title="Matricula" content={aircraft.registration} />
            <DetailFlight title="Data" content={flightData.date} />
            {balance && (
                <DetailFlight
                    title="Saldo"
                    balance
                    content={flightData.balance}
                />
            )}
        </Card>
    );
}
