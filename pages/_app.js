import '../styles/globals.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from './api/config.json';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: "Lato", sans-serif;

    color: ${({ theme }) => theme.colors.secundary};
  }

  html, body{
    height: 100%;
  }

  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;


export const MyApp = ({ Component, pageProps }) => {
  return (


    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <Component {...pageProps} />

    </ThemeProvider>
    
    
    );
}

export default MyApp
