import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme.ts';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import HistoryFlight from './pages/HistoryFlight.tsx';
import DetailsFlight from './pages/DetailsFlight.tsx';
import ScoreFlight from './pages/ScoreFlight.tsx';

createRoot(document.getElementById('root')!).render(
    // Componente de contexto do Material UI.
    <ThemeProvider theme={theme}>
        {/* É um reset global de CSS que o MUI aplica*/}
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/flights" replace />} />

                <Route path="/flights" element={<App />}>
                    <Route index element={<HistoryFlight />} />
                    <Route path="score" element={<ScoreFlight />} />
                    <Route path=":id" element={<DetailsFlight />} />
                </Route>

                {/* Redireciona qualquer rota para o inicio */}
                <Route path="*" element={<Navigate to="/flights" replace />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);
