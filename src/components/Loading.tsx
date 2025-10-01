import { Box, CircularProgress, Typography } from '@mui/material';
import type { ReactElement } from 'react';

/**
 * Componente responsável por representar o carregamento da página,
 * gerando um feedback visual ao usuário.
 *
 * @returns `ReactElement`.
 */
export default function Loading(): ReactElement {
    return (
        <Box>
            <Typography variant="body1">
                Loading...
                <span>
                    <CircularProgress />
                </span>
            </Typography>
        </Box>
    );
}
