import { Box, Typography } from '@mui/material';
import { type ReactElement } from 'react';
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
    const setSignal = () => {
        let value = Number(content);
        if (value < 0) return `- P$ ${Math.abs(value).toFixed(2)}`;
        else return `P$ ${Math.abs(value).toFixed(2)}`;
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                paddingLeft: 4,
                paddingRight: 4
            }}>
            <Typography variant="caption">{title}</Typography>
            {balance ? (
                <Typography
                    variant="body1"
                    color={Number(content) > 0 ? 'success' : 'error'}>
                    {setSignal()}
                </Typography>
            ) : (
                <Typography variant="body1">{content}</Typography>
            )}
        </Box>
    );
}
