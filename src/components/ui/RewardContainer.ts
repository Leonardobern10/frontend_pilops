import { Box, styled } from '@mui/material';

/**
 * Componente container que abriga todos os campos
 * correspondentes as recompensas de um voo especifico.
 */
const RewardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: theme.spacing(30),
    width: '100%',
    border: 2
}));

export default RewardContainer;
