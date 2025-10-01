import { Typography } from '@mui/material';
import { type ReactElement } from 'react';
import type { DetailFlightProps } from '../types/DetailFlightProps';
import InfoFlightContainer from './ui/InfoFlightContainer';
import { setSignal } from '../services/balanceService';

/**
 * Componente responsável por exibir informações complementares do voo
 * @param title - Representa o título da informação
 * @param content - Representa o conteudo da informação
 * @param balance - [OPCIONAL] `boolean` que indica se o componente deve tratar o valor
 * recebido como um `balance` (saldo) ou não. @default false
 */
export default function InfoFlight({
    title,
    content,
    balance
}: DetailFlightProps): ReactElement {
    return (
        <InfoFlightContainer>
            <Typography variant="caption">{title}</Typography>
            {balance ? (
                <Typography
                    variant="body1"
                    color={Number(content) > 0 ? 'success' : 'error'}>
                    {setSignal(content)}
                </Typography>
            ) : (
                <Typography variant="body1">{content}</Typography>
            )}
        </InfoFlightContainer>
    );
}
