import React, {createContext, useContext, useState} from 'react'

const languageContext = createContext()

export const languageProvider = ({ children}) => {
    const [language, setLangauge] = useState('en') //default

    const toggleLanguage = () => {
        setLangauge(prevLanguage => (prevLanguage ==="en" ? "ge" : 'en'))
    }

    return (
        <languageContext.Provider value={{ language,toggleLanguage}}>
            {children}
        </languageContext.Provider>
    )
}
export const useLanguage = () => {
    return useContext(languageContext)
}