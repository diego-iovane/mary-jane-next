import { useState, useContext, createContext } from 'react'

const ContentCtx = createContext()
export const GetContentContext = () => useContext(ContentCtx)

const ContentContext = ({ children }) => {
    const [content, setContent] = useState({})

    return(
        <ContentCtx.Provider value={{content, setContent}}>
            {children}
        </ContentCtx.Provider>
    )
}

export default ContentContext