import { Stack, styled } from '@mui/material';

/**
 * Topo do componente HistoryFlight
 */
export const HeaderHistoryContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'column',
    rowGap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
}));
