import { Card, styled } from '@mui/material';

/**
 * Componente container que corresponde à toda a área que
 * é destinada a exibir as recompensas de um voo especifico.
 */
const RewardFlightContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2)
}));

export default RewardFlightContainer;
