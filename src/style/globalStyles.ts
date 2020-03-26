import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
    ${normalize}

  body {
    min-width: 320px;
    background-color: ${Colors.lightGrey};
    color: ${Colors.white};
    font-family: 'Roboto', sans-serif;
  }
`;
