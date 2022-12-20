import { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import { Navigation } from './Navigation'
import { Content } from './Content'

export const LanguageContext = createContext('en');

function App() {
    const [lang, setLang] = useState('en');

    return (
        <LanguageContext.Provider value={lang}>
            <Navigation />
            <div>
                <Button onClick={() => setLang('en')}>EN</Button>
                <Button onClick={() => setLang('pl')}>PL</Button>
            </div>
            <Content />
        </LanguageContext.Provider>
    );
}

export default App;
