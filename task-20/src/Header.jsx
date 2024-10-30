import React from 'react'
import { useLanguage } from './languageContext'

const Header = () => {
    const {language, toggleLanguage} = useLanguage()

    const transition = {
        en: {
            title: 'TODO',
            languageToggle: 'switch language',
        },
        ge: {
            title: 'თოდო',
            languageToggle: 'ენის შეცვლა',
        }
    }


    return (
        <header>
            <h1>{transition[language].title}</h1>
            <button onClick={toggleLanguage}>{transition[language].languageToggle}change</button>
        </header>
    )
}

export default Header