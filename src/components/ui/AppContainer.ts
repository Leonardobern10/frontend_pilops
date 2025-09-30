import { Box, styled } from '@mui/material';

/**
 * Componente container que define o layout fixo da aplicação
 */
const AppContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: theme.spacing(6)
}));

export default AppContainer;
