import {
    Box,
    Button,
    Card,
    Typography,
    useTheme,
    type Theme
} from '@mui/material';

export default function App() {
    return (
        <Box
            sx={(theme: Theme) => ({
                width: '100vw',
                height: '100vh',
                padding: 0,
                backgroundColor: theme.palette.background.default
            })}>
            <Button variant="contained">Ola mundo!</Button>
            <Typography variant="h1">Histórico</Typography>
            <Typography variant="body1">Proxima seção</Typography>
            <Card
                sx={{
                    width: 'fit-content',
                    padding: 2
                }}>
                Koé rapaziada!
            </Card>
        </Box>
    );
}
