import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import RouteSvg from './RouteSvg';

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
}: {
    trajeto: string;
    from: string;
    to: string;
}): ReactElement {
    return (
        <Box>
            <Typography variant="caption">{trajeto}</Typography>
            <Box>
                <RouteSvg />
            </Box>
            <Stack direction="row">
                <Typography variant="body2">{from}</Typography>
                <Typography variant="body2">{to}</Typography>
            </Stack>
        </Box>
    );
}
