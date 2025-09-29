import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { DetailFlightProps } from '../types/DetailFlightProps';

/**
 * Componente responsável por exibir informações complementares do voo
 * @param title - Representa o título da informação
 * @param content - Representa o conteudo da informação
 */
export default function DetailFlight({
    title,
    content,
    balance
}: DetailFlightProps): ReactElement {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 2,
                paddingRight: 2
            }}>
            <Typography variant="caption">{title}</Typography>
            {balance ? (
                <Typography
                    variant="body1"
                    color={Number(content) > 0 ? 'success' : 'error'}>
                    P$ {Number(content).toFixed(2)}
                </Typography>
            ) : (
                <Typography variant="body1">{content}</Typography>
            )}
        </Box>
    );
}
