import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    height: 100%;
    margin: 0;
  }

  body {
    /* min-width: 320px; */
    height: 100%;
    background-color: ${Colors.lightGrey};
    color: ${Colors.white};
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
