import './App.css'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styled/Globaltheme.style";
import { darkTheme, lightTheme } from "./styled/Theme.style";
import {useDarkMode} from './styled/useDarkmode'
import Resumenav from './components/resumenav/Resumenav'

function App() {
 
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  
  return (
      
       <ThemeProvider theme={themeMode} >
  
        <GlobalStyles/>
      <Resumenav />
          <button onClick={themeToggler}>Switch Theme</button>
     
        </ ThemeProvider >
        
      
  )
}

export default App;
