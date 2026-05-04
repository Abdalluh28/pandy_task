import { useState } from "react"
import { ThemeContext } from "./ThemeContext"


const ThemeProvider = ({ children }) => {
    const initialTheme = localStorage.getItem("darkMode") === "true"
    const [darkMode, setDarkMode] = useState(initialTheme)

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const newTheme = !prev
            localStorage.setItem("darkMode", newTheme)
            return newTheme
        })
    }

    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider