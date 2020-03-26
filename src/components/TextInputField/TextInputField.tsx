import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  type?: "text" | "password";
  name: string;
  id: string;
  onChange?: () => void;
}

export function TextInputField(props: Props) {
  const { type = "text", name, onChange, id } = props;
  return <Input type={type} name={name} onChange={onChange} id={id} />;
}

const Input = styled.input`
  height: 36px;
  border-radius: 6px;
  padding-left: 8px;
  outline: none;
  box-shadow: none;
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${Colors.focusBlue};
  }
`;
