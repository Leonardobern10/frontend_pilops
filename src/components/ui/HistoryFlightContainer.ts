import { styled } from '@mui/material';

/**
 * Componente container que abriga toda a seção do historico de vôos
 *
 * @extends `Box`.
 */
const HistoryFlightContainer = styled('section')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(4)
}));

export default HistoryFlightContainer;
