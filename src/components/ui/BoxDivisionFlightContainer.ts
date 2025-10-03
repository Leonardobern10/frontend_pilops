import { Box, styled } from '@mui/material';

export const BoxDivisionFlightContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: 'fit-content',
    rowGap: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: theme.spacing(15),
        justifyContent: 'space-evenly',
        width: '100%'
    }
}));
