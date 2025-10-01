import { styled } from '@mui/material';

/**
 * Componente container que cada campo de um vôo especifico.
 *
 * @extends - `section`
 */
const DetailsFlightContainer = styled('section')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(4)
}));

export default DetailsFlightContainer;
