import { Box, styled } from '@mui/material';

/**
 * Componente especifico que abriga as informações de
 * rota de um voo.
 */
const RouteContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    [theme.breakpoints.up('md')]: {
        width: 'fit-content'
    }
}));

export default RouteContainer;
