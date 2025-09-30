import { Box, CircularProgress, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function Loading(): ReactElement {
    return (
        <Box>
            <Typography variant="body1">
                Loaging...
                <span>
                    <CircularProgress />
                </span>
            </Typography>
        </Box>
    );
}
