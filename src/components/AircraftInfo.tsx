import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

/**
 * Componente responsável por exibir as informações do avião.
 *
 * @param name - Representa o nome do avião
 * @param airline - Representa a linha aérea
 */
export default function AircraftInfo({
    name,
    airline
}: {
    name: string;
    airline: string;
}): ReactElement {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2">{airline}</Typography>
        </Box>
    );
}
