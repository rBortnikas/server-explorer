import React from "react";
import styled from "styled-components";

export function Logo() {
  return <Text>server explorer</Text>;
}

const Text = styled.div`
  max-width: 300px;
  font-size: 60px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 8px;
  user-select: none;
`;
