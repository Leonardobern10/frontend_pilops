import { Box } from '@mui/material';
import type { ReactElement } from 'react';
import routSvg from '../assets/Trajeto_pilops.svg';

/**
 * Componente exibido no indicador de rota
 */
export default function RouteSvg(): ReactElement {
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <img
                src={routSvg}
                alt="Icone svg que representa uma ligação entre dois pontos"
            />
        </Box>
    );
}
