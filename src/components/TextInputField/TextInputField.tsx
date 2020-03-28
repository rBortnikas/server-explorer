import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  type?: "text" | "password";
  name: string;
  id: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  label?: string;
  error?: boolean | string;
}

export function TextInputField(props: Props) {
  const {
    type = "text",
    name,
    id,
    onChange,
    value,
    autoFocus,
    label,
    error
  } = props;
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        name={name}
        id={id}
        error={!!error}
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
        data-testid={`${name}-input`}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
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

const Label = styled.label`
  margin: 16px 0 8px 0;
  font-size: 12px;
`;

const ErrorLabel = styled.p`
  color: ${Colors.dirtyRed};
  font-size: 12px;
`;
