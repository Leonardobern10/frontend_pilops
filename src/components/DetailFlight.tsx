import { Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { DetailFlightProps } from '../types/DetailFlightProps';

/**
 * Componente responsável por exibir informações complementares do voo
 * @param title - Representa o título da informação
 * @param content - Representa o conteudo da informação
 */
export default function DetailFlight({
    title,
    content
}: DetailFlightProps): ReactElement {
    return (
        <Paper>
            <Typography variant="caption">{title}</Typography>
            <Typography variant="body1">{content}</Typography>
        </Paper>
    );
}
