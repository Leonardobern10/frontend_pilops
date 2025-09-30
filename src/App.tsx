import { Box, type Theme } from '@mui/material';
import LogoComponent from './components/LogoComponent';
import { Outlet } from 'react-router';

export default function App() {
    return (
        <Box
            component={'div'}
            sx={(theme: Theme) => ({
                width: '100%',
                height: '100%',
                padding: 6,
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                rowGap: 6
            })}>
            <LogoComponent />
            <Outlet />
        </Box>
    );
}
