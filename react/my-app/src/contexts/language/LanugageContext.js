import { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext({
    lang: 'en',
    setLang: () => {}
});

export const LanguageContextProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    return <LanguageContext.Provider value={
        {
            lang,
            setLang
        }
    }>
        {children}
    </LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext);
