import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

   
  }
  .navcon {
    color:  ${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.body};;
  }
  .curved-top {
    background-color: ${({ theme }) => theme.bgcolor};;
  }
  .resumebody{
    background-color: ${({ theme }) => theme.bgcolor};;
 
}
.profile-general img{
  border: 4px solid ${({ theme }) => theme.text};
}

  `
