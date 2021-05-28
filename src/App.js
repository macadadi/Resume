import './App.css'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styled/Globaltheme.style";
import { darkTheme, lightTheme } from "./styled/Theme.style";
import {useDarkMode} from './styled/useDarkmode'
import Resumenav from './components/resumenav/Resumenav'
import { Container } from 'reactstrap';
import Resumebody from './components/Resumebody';

function App() {
 
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  
  return (
      <Container>
       <ThemeProvider theme={themeMode} >
        <GlobalStyles/>
      <Resumenav themeToggler={themeToggler}/>
      <Resumebody />
          
     
        </ ThemeProvider >
        
        </Container>
  )
}

export default App;
