import { createGlobalStyle } from 'styled-components';

export const colors = {
  lightPink: '#FFEBD9',
  hotPink: '#E66767',
  white: '#FFFFFF',
  offWhite: '#FFF8F2',
  grey: ' #4B4B4B',
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.offWhite};
    color: ${colors.hotPink};
    line-height: 1.5;
  }

  #root {
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
