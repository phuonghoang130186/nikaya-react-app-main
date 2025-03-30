import { createContext, useContext, useState } from "react"
const readingContext = createContext()

const ReadingProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(() => {
        return localStorage.getItem("fontSize") || 16
    })

    const handleChangeFontSize = (e) => {
        localStorage.setItem('fontSize', e.target.value)
        setFontSize(e.target.value)
    }

    return (
        <readingContext.Provider value={{ fontSize, handleChangeFontSize }} >
            {children}
        </readingContext.Provider>
    )

}

const useReading = () => useContext(readingContext)

export {
    ReadingProvider, useReading
}
