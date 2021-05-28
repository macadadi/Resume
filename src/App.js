import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/defaultThemes/global";
import { darkTheme, lightTheme } from "./components/defaultThemes/theme";
import React, { useState } from 'react';
import { useDarkMode } from "./components/defaultThemes/useDarkMode";
import Horizontalnav from "./components/pagecomponent/Horizontalnav";
import Resumebody from "./components/pagecomponent/Resumebody";

function App() {
 // const [theme, setTheme] = useState('light');
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
  
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Horizontalnav />
        <Resumebody />
        <button  onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a light theme!</h1>

      </>
    </ThemeProvider>
  )
}

export default App;
