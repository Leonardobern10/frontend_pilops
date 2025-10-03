import { Box, styled } from '@mui/material';

/**
 * Componente container para as informações referentes a uma aeronave
 */
const AircraftContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        whiteSpace: 'nowrap'
    }
}));

export default AircraftContainer;
