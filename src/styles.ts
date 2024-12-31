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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}

#root {
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
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
    width: 100%; 
    max-width: 1024px;
    margin: 0 auto;
}
`;
