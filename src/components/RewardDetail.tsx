import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { RewardDetailProps } from '../types/RewardDetailProps';

export default function RewardDetail({
    iconSrc,
    iconAlt,
    title,
    value,
    uppercase,
    percentage
}: RewardDetailProps): ReactElement {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 2
            }}>
            <Box>
                <img src={iconSrc} alt={iconAlt} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Typography variant="subtitle2">
                    {uppercase ? title.toUpperCase() : title}
                </Typography>
                <Typography variant="h1">{`${value}${percentage ? '%' : ''}`}</Typography>
            </Box>
        </Box>
    );
}
