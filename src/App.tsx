import LogoComponent from './components/LogoComponent';
import { Outlet } from 'react-router';
import AppContainer from './components/ui/AppContainer';

export default function App() {
    return (
        <AppContainer>
            <LogoComponent />
            <Outlet />
        </AppContainer>
    );
}
