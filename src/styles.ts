import { createGlobalStyle } from "styled-components";

export const colors = {
  lightPink: "#FFEBD9",
  hotPink: "#E66767",
  white: "#FFFFFF",
};

export const GlobalCss = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }

    body {
    background-color: ${colors.white};
    color: ${colors.hotPink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
