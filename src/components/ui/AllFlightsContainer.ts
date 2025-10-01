import { styled } from '@mui/material';

/**
 * Componente container que abriga todos os registros do histórico de vôos.
 */
const AllFlightsContainer = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: theme.spacing(4)
}));

export default AllFlightsContainer;
