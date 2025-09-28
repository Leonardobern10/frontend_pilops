import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
    // Componente de contexto do Material UI.
    <ThemeProvider theme={theme}>
        {/* É um reset global de CSS que o MUI aplica*/}
        <CssBaseline />
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>
);
