import { Box } from '@mui/material';
import logo from '../assets/Logo_pilops.svg';

/**
 * Componente responsável por exibir a logo da empresa.
 * @returns Logo da empresa.
 */
export default function LogoComponent() {
    return (
        <Box component={'header'} sx={logoStyle}>
            <img src={logo} alt="Logo" />
        </Box>
    );
}

const logoStyle = {
    width: 'fit-content',
    height: 'fit-content'
};
