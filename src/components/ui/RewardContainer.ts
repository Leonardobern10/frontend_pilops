import { styled } from '@mui/material';

/**
 * Componente container que abriga todos os campos
 * correspondentes as recompensas de um voo especifico.
 */
const RewardContainer = styled('section')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: theme.spacing(5),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        columnGap: theme.spacing(30),
        justifyContent: 'flex-start',
        width: '100%'
    }
}));

export default RewardContainer;
