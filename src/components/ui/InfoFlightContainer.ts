import { Box, styled } from '@mui/material';

/**
 * Componente container que abriga todos os campos de informações
 * de um registro de voo especifico.
 */
const InfoFlightContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
}));

export default InfoFlightContainer;
