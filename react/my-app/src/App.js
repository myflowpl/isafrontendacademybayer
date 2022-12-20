import { Navigation } from './Navigation'
import { Content } from './Content'
import { LanguageContextProvider } from './contexts/language/LanugageContext'

function App() {
    return (
        <LanguageContextProvider>
            <Navigation />
            <Content />
        </LanguageContextProvider>
    );
}

export default App;
