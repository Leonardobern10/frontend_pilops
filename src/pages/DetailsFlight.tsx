import { useParams } from 'react-router';
import FlightComponent from '../components/FlightComponent';
import Loading from '../components/Loading';
import DetailsFlightContainer from '../components/ui/DetailsFlightContainer';
import RewardFlightComponent from '../components/RewardFlightComponent';
import IconComponent from '../components/IconComponent';
import { useDetailsFlight } from '../hooks/useDetailsFlight';
import leftArrow from '../assets/LeftArrow_pilops.svg';

/**
 * Pagina responsável por exibir os todas as informações
 * do detalhe de um vôo específico.
 */
export default function DetailsFlight() {
    const param = useParams();
    const id: string = param.id!;
    const { current, loading } = useDetailsFlight(id);

    return loading ? (
        <Loading />
    ) : (
        <DetailsFlightContainer>
            <IconComponent
                titleSection="Detalhes do Voo"
                iconImage={leftArrow}
                iconAlt="Icone de seta, interativo para voltar à seção anterior"
            />
            <RewardFlightComponent
                balance={current?.flightData.balance!}
                xp={current?.flightData.xp!}
                missionBonus={current?.flightData.missionBonus!}
            />
            <FlightComponent
                id={id}
                aircraft={current!.aircraft}
                flightData={current!.flightData}
            />
        </DetailsFlightContainer>
    );
}
