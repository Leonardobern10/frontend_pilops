import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';
import { BrowserRouter, Route, Routes } from 'react-router';
import HistoryFlight from './view/HistoryFlight.tsx';
import DetailsFlight from './view/DetailsFlight.tsx';

createRoot(document.getElementById('root')!).render(
    // Componente de contexto do Material UI.
    <ThemeProvider theme={theme}>
        {/* É um reset global de CSS que o MUI aplica*/}
        <CssBaseline />
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/flight" element={<App />}>
                        <Route index element={<HistoryFlight />} />
                        <Route path=":pid" element={<DetailsFlight />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    </ThemeProvider>
);
