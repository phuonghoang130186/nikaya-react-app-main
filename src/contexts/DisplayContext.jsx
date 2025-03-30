import { createContext, useContext, useEffect, useState } from "react"

const DisplayContext = createContext()

const DisplayProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true' || false)
    useEffect(() => {
        const root = document.documentElement
        if (darkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [darkMode])
    const handleChangeMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('dark-mode', !darkMode)
    }
    return (
        <DisplayContext.Provider value={{ darkMode, handleChangeMode }} >
            {children}
        </DisplayContext.Provider>
    )
}

const useDisplay = () => useContext(DisplayContext)

export { useDisplay, DisplayProvider }
