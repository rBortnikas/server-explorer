import React from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";

export function NotFound() {
  return (
    <Wrapper>
      <h1>Page not found.</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  flex-grow: 1;
  background-color: ${Colors.almostBlack};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    width: 800px;
  }
`;
