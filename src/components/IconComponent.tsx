import { IconButton, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import type { IconComponentProps } from '../types/IconComponentProps';

// Estilo personalizado da imagem
const imgStyle = {
    maxHeight: 25
};

/**
 * Componente container que abriga a seção com ícone
 * e titulo da seção, com formatação já definida.
 *
 * @param iconImage - `string` que representa o caminho para a imagem
 * a ser renderizada como ícone.
 * @param iconAlt - `string` que representa o texto alternativo
 * para a imagem caso ela não seja exibida.
 * @param titleSection - `string` que representa o titulo a ser
 * exibido ao lado do icone e que compoe o topo da seção.
 *
 * @returns `ReactElement`.
 */
export default function IconComponent({
    iconImage,
    iconAlt,
    titleSection
}: IconComponentProps): ReactElement {
    const navigate = useNavigate();
    const handleClick = () => navigate('/flights');
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={4}
            component={'article'}>
            <IconButton aria-label="voltar" onClick={handleClick}>
                <img style={imgStyle} src={iconImage} alt={iconAlt} />
            </IconButton>
            <Typography variant="h2">{titleSection}</Typography>
        </Stack>
    );
}
