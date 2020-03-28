import React from "react";
import styled from "styled-components";

export function Logo() {
  return <Text>server explorer</Text>;
}

const Text = styled.h1`
  width: 300px;
  font-size: 60px;
  font-family: "Nunito", sans-serif;
  margin: 8px 0px;
  user-select: none;
`;
