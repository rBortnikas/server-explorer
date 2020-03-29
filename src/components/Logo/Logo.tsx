import React from "react";
import styled from "styled-components";

export function Logo() {
  return <Text>server explorer</Text>;
}

const Text = styled.div`
  max-width: 200px;
  font-size: 40px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 8px;
  user-select: none;

  @media (min-width: 480px) {
    font-size: 60px;
    max-width: 300px;
  }
`;
