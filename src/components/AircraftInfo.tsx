import { Typography } from '@mui/material';
import type { ReactElement } from 'react';
import AircraftContainer from './ui/AircraftContainer';
import type { AircraftInfoProps } from '../types/AircraftInfoProps';

/**
 * Componente responsável por exibir as informações do avião.
 *
 * @param name - Representa o nome do avião
 * @param airline - Representa a linha aérea
 */
export default function AircraftInfo({
    name,
    airline
}: AircraftInfoProps): ReactElement {
    return (
        <AircraftContainer>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2">{airline}</Typography>
        </AircraftContainer>
    );
}
