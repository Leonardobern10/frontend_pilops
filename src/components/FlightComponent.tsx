import { Card } from '@mui/material';
import type { ReactElement } from 'react';
import type FlightInterface from '../types/FlightInterface';
import AircraftInfo from './AircraftInfo';
import RouteComponent from './RouteComponent';
import DetailFlight from './DetailFlight';

/**
 * Componente responsável por exibir todas as informações
 * pertinentes á um registro no historico de voos.
 *
 * @param aircraft - Representa as informações do avião
 * @param flightData - Representa as informações sobre o voo
 * @returns Componente React.
 */
export default function FlightComponent({
    aircraft,
    flightData
}: FlightInterface): ReactElement {
    return (
        <Card>
            <AircraftInfo name={aircraft.name} airline={aircraft.airline} />
            <RouteComponent
                trajeto="Trajeto"
                from={flightData.route.from}
                to={flightData.route.to}
            />
            <DetailFlight title="Matricula" content={aircraft.registration} />
            <DetailFlight title="Data" content={flightData.date} />
            <DetailFlight
                title="Saldo"
                content={flightData.balance.toString()}
            />
        </Card>
    );
}
