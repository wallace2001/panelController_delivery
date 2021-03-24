import '../styles/globals.css'
import { createContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LoginProvider, LoginInfo } from './api/loginInfo';
import { GetServerSideProps } from 'next'
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


export const MyApp = ({ Component, pageProps, name }, props) => {

  return (

    <ThemeProvider theme={theme}>
      <LoginProvider name={name} password={props.password}>
          <GlobalStyle />
          <Component {...pageProps} />
      </LoginProvider>
    </ThemeProvider>
    
    );
}

export default MyApp;

export const getServerSideProps = async(ctx) => {
  const { email, password, name } = ctx.req.cookies;

  return {
      props:{
          name: String(name),
          password: String(password),
          email: String(email)
      }
  }
}
