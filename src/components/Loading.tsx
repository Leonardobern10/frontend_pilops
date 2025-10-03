import { Box, CircularProgress, Typography } from '@mui/material';
import type { ReactElement } from 'react';

const boxLoadingStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 2
};

/**
 * Componente responsável por representar o carregamento da página,
 * gerando um feedback visual ao usuário.
 *
 * @returns `ReactElement`.
 */
export default function Loading(): ReactElement {
    return (
        <Box sx={boxLoadingStyle}>
            <Typography variant="h2">
                Loading...
                <span>
                    <CircularProgress />
                </span>
            </Typography>
        </Box>
    );
}
