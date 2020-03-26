import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  type?: "text" | "password";
  name: string;
  onChange?: () => void;
}

export function TextInputField(props: Props) {
  const { type = "text", name, onChange } = props;
  return <Input type={type} required={true} name={name} onChange={onChange} />;
}

const Input = styled.input`
  height: 40px;
  border-radius: 6px;
  outline: none;
  box-shadow: none;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${Colors.focusBlue};
  }
`;
