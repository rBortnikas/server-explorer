import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  type?: "text" | "password";
  name: string;
  id: string;
  error?: boolean;
}

export function TextInputField(props: Props) {
  const { type = "text", name, id, error = false } = props;
  return <Input type={type} name={name} id={id} error={error} />;
}

const Input = styled.input<{ error: boolean }>`
  height: 36px;
  border-radius: 6px;
  padding-left: 8px;
  outline: none;
  box-shadow: none;
  border: 3px solid ${p => (p.error ? `${Colors.dirtyRed}` : `transparent`)};

  &:focus {
    border: 3px solid ${Colors.focusBlue};
  }
`;
