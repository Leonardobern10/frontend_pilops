import { createTheme } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(255, 68, 84, 0.76)',
            light: 'rgba(161, 124, 127, 0.76)',
            dark: 'rgba(45, 12, 15, 0.76)',
            contrastText: 'rgba(14, 20, 74, 0.84)'
        }
    },
    typography: {
        fontSize: 20
    },
    shape: { borderRadius: 4 },
    spacing: 4,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 68, 84, 0.76)',
                    textTransform: 'none'
                }
            }
        }
    }
});

export default theme;
