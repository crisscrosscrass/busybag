import React, { useContext, useState, useEffect } from 'react'

export const ThemeContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider( {children} ) {
    const [themePrimary, setThemePrimary] = useState('')
    const [loading, setLoading] = useState(true)

    function toggleTheme(themePrimary){
        themePrimary === '#047AED' ? setThemePrimary('#E13B64') : setThemePrimary('#047AED')
        return themePrimary
    }

    useEffect(() => {
        setThemePrimary('#E13B64')
        setLoading(false)
    },[]) 


    const value = {
        themePrimary,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {!loading && children}
        </ThemeContext.Provider>
    )
}