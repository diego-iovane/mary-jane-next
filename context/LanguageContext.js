import { useState, useContext, createContext } from 'react'

const LanguageCtx = createContext()
export const GetLanguageContext = () => useContext(LanguageCtx)

const LanguageContext = ({ children }) => {
    const [language, setLanguage] = useState({})

    return(
        <LanguageCtx.Provider value={{language, setLanguage}}>
            {children}
        </LanguageCtx.Provider>
    )
}

export default LanguageContext