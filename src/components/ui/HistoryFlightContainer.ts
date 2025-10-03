import { styled } from '@mui/material';

/**
 * Componente container que abriga toda a seção do historico de vôos
 *
 * @extends `Box`.
 */
const HistoryFlightContainer = styled('section')(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        width: '100%'
    }
}));

export default HistoryFlightContainer;
