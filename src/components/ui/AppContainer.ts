import { Box, styled } from '@mui/material';

/**
 * Componente container que define o layout fixo da aplicação
 */
const AppContainer = styled(Box)(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    justifyContent: 'space-between',
    rowGap: theme.spacing(6),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        width: '100%'
    }
}));

export default AppContainer;
