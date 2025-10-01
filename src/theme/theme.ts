import { createTheme } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#E0E0E0',
            light: '#FFF',
            dark: '#7e7e7eff',
            contrastText: 'rgba(14, 20, 74, 0.84)'
        },
        secondary: {
            main: '#727272ff'
        },
        error: {
            main: '#FF0000'
        },
        success: {
            main: '#00FF88'
        },
        warning: {
            main: '#FF8F0D'
        },
        info: {
            main: '#38BDF8'
        },
        background: {
            paper: '#212121',
            default: '#1A1A1A'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0'
        }
    },
    spacing: 8
});

theme = createTheme(theme, {
    typography: {
        fontSize: 16,
        h1: {
            fontFamily: 'Sora',
            fontSize: 32, // Trocar por escala relativa
            fontWeight: 700,
            lineHeight: 1.2,
            color: theme.palette.text.primary
        },
        h2: {
            fontFamily: 'Sora',
            fontSize: 24, // Trocar por escala relativa
            fontWeight: 700,
            lineHeight: 1.2,
            color: theme.palette.text.primary
        },
        h3: {
            fontFamily: 'Sora',
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.2,
            color: theme.palette.text.primary
        },
        body1: {
            fontFamily: 'Manrope',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.4,
            color: theme.palette.text.primary
        },
        body2: {
            fontFamily: 'Manrope',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.4,
            color: theme.palette.text.secondary
        },
        caption: {
            fontFamily: 'Manrope',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.4,
            color: theme.palette.text.secondary
        },
        subtitle1: {
            fontFamily: 'Sora',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.4,
            color: theme.palette.text.secondary
        },
        subtitle2: {
            fontFamily: 'Manrope',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.4,
            color: theme.palette.text.secondary
        }
    },
    shape: { borderRadius: 3 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.paper,
                    textTransform: 'none',
                    color: theme.palette.text.primary
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.paper,
                    border: `.5px solid ${theme.palette.secondary.main}`,
                    width: '100%',
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingBottom: 4,
                    paddingTop: 2,
                    columnGap: 10
                }
            }
        }
    }
});

export default theme;
