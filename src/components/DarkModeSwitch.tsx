import { useContext, useCallback, useState, useEffect } from "react";
import { ThemeContext } from "../context/DarkModeContext";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="flex gap-4">
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" checked={isDark()} onChange={toggleTheme} value="" className="sr-only peer"></input>
  <div className="flex items-center justify-center justify-content:center w-11 h-6 bg-gray-200 
  peer-focus:outline-none peer-focus:ring-4 peer-focus:mainDarkCyan dark:peer-focus:ring-transparent 
  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
  after:content-[''] after:absolute after:flex after:left-[2px] after:bg-white after:border-gray-300 after:border
   after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-mainDarkCyan"></div>
</label>
{isDark() ? (
    <FontAwesomeIcon className="m-auto dark:text-mainSilver dark:hover:text-white" icon={faMoon} />
  ) : <FontAwesomeIcon className="m-auto dark:text-mainSilver dark:hover:text-white" icon={faSun} /> }
</div>



    )
}
