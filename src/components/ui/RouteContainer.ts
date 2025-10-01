import { Box, styled } from '@mui/material';

/**
 * Componente especifico que abriga as informações de
 * rota de um voo.
 */
const RouteContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}));

export default RouteContainer;
