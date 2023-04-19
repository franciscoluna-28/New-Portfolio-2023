import { useContext, useCallback, useState, useEffect } from "react";
import { ThemeContext } from "../../context/DarkModeContext";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs"

export const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const [isDarkModeActive, setIsDarkModeActive] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const isDark = useCallback(() => {
        return theme === 'dark';
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setIsDarkModeActive(!isDarkModeActive);
        setTheme(isDarkModeActive ? 'light' : 'dark');
    }, [setIsDarkModeActive, setTheme, isDarkModeActive]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e: MediaQueryListEvent) => {
            setIsDarkModeActive(e.matches);
            setTheme(e.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, [setIsDarkModeActive, setTheme]);

    return (
        <button onClick={toggleTheme} className="peer">
            {isDark() ? <FaMoon/> : <BsSunFill/>}
        </button>
    )
}
