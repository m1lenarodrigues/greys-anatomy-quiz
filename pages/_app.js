import {createGlobalStyle, ThemeProvider} from 'styled-components';
import db from '../db.json';
import Meta from '../src/components/Meta'

const theme = db.theme;

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    display:flex;
    flex-direction:column;
    font-family: 'Lato', sans-serif;
    color: ${({theme}) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({Component, pageProps}) {
  return (
    <>
      <Meta/>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
