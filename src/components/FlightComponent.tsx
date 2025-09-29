import { Card } from '@mui/material';
import type { ReactElement } from 'react';
import type FlightInterface from '../types/FlightInterface';
import AircraftInfo from './AircraftInfo';
import RouteComponent from './RouteComponent';
import DetailFlight from './DetailFlight';
import { useNavigate } from 'react-router';

/**
 * Componente responsável por exibir todas as informações
 * pertinentes á um registro no historico de voos.
 *
 * @param aircraft - Representa as informações do avião
 * @param flightData - Representa as informações sobre o voo
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
            onClick={() => navigate(`/flight/${id}`)}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 2,
                paddingTop: 2,
                columnGap: 10
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
