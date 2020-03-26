import React from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";

interface Props {
  onClick?: () => void;
  children: string;
}

export function Button(props: Props) {
  const { onClick, children } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  height: 36px;
  border-radius: 6px;
  background-color: ${Colors.kindaBlue};
  outline: none;
  box-shadow: none;
  border: 1px solid transparent;
  color: ${Colors.white};
  &:focus {
    border: 1px solid ${Colors.focusBlue};
  }
`;
