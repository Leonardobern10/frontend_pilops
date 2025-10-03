import { Card } from '@mui/material';
import type { ReactElement } from 'react';
import type FlightInterface from '../types/FlightInterface';
import AircraftInfo from './AircraftInfo';
import RouteComponent from './RouteComponent';
import InfoFlight from './DetailFlight';
import CardActionFlightContainer from './ui/CardFlightContainer';
import { useNavigate } from 'react-router';
import { BoxDivisionFlightContainer } from './ui/BoxDivisionFlightContainer';

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
    const handleClick = () => navigate(`/flights/${id}`);
    return (
        <Card component={'article'}>
            <CardActionFlightContainer onClick={handleClick}>
                <BoxDivisionFlightContainer>
                    <AircraftInfo
                        name={aircraft.name}
                        airline={aircraft.airline}
                    />
                    <RouteComponent
                        trajeto="Trajeto"
                        from={flightData.route.from}
                        to={flightData.route.to}
                    />
                </BoxDivisionFlightContainer>
                <BoxDivisionFlightContainer>
                    <InfoFlight
                        title="Matricula"
                        content={aircraft.registration}
                    />
                    <InfoFlight title="Data" content={flightData.date} />
                    {balance && (
                        <InfoFlight
                            title="Saldo"
                            balance
                            content={flightData.balance}
                        />
                    )}
                </BoxDivisionFlightContainer>
            </CardActionFlightContainer>
        </Card>
    );
}
