import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import RouteSvg from './RouteSvg';
import RouteContainer from './ui/RouteContainer';
import type { RouteComponentProps } from '../types/RouteComponentProps';

/**
 * Componente responsável por exibir as informações
 * de rota para o voo específico.
 * @param trajeto - Titulo a ser exibido como legenda do componente
 * @param from - Local de origem do voo
 * @param to - Local de destino do voo
 */
export default function RouteComponent({
    trajeto,
    from,
    to
}: RouteComponentProps): ReactElement {
    return (
        <RouteContainer>
            <Typography variant="caption">{trajeto}</Typography>
            <Box>
                <RouteSvg />
            </Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <Typography variant="body1">{from}</Typography>
                <Typography variant="body1">{to}</Typography>
            </Stack>
        </RouteContainer>
    );
}
