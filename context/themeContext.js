import React from 'react'
import {lightMode, darkMode} from '../styles/theme/theme.ts';

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
    //Theme provider defaults to darktheme
    const [theme, setTheme] = React.useState(lightMode);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    )
}

export {ThemeContext};
export default ThemeProvider;