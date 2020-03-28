import React, { ReactElement } from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";

interface Props {
  onClick?: () => void;
  children: string | ReactElement;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button";
}

export function Button(props: Props) {
  const { onClick, children, fullWidth = false, type = "button" } = props;

  return (
    <StyledButton onClick={onClick} fullWidth={fullWidth} type={type}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ fullWidth: boolean }>`
  height: 40px;
  ${p => (p.fullWidth ? `width: 100%` : "")};
  border-radius: 6px;
  background-color: ${Colors.kindaBlue};
  outline: none;
  box-shadow: none;
  border: 3px solid transparent;
  color: ${Colors.white};
  display: flex;
  justify-content: center;

  &:focus {
    border: 3px solid ${Colors.focusBlue};
  }
  &:hover {
    background-color: ${Colors.lightBlue};
  }
`;
