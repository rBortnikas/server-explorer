import React, { useState } from "react";
import styled from "styled-components";

import { TextInputField } from "src/components/TextInputField";
import { Button } from "src/components/Button";
import { Colors } from "src/style/colors";

export function LoginForm() {
  const [usernameBlankError, setUsernameBlankError] = useState(false);
  const [passwordBlankError, setPasswordBlankError] = useState(false);

  const usernameString = "username";
  const passwordString = "password";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get(usernameString);
    const password = formData.get(passwordString);

    if (!username) {
      setUsernameBlankError(true);
    }
    if (!password) {
      setPasswordBlankError(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={usernameString}>Username</Label>
      <TextInputField name={usernameString} id={usernameString} />
      {usernameBlankError && <ErrorLabel>Username cannot be blank</ErrorLabel>}

      <Label htmlFor={passwordString}>Password</Label>
      <TextInputField
        name={passwordString}
        id={passwordString}
        type={passwordString}
      />
      {passwordBlankError && <ErrorLabel>Password cannot be blank</ErrorLabel>}

      <ButtonWrapper>
        <Button fullWidth>{"Log In"}</Button>
      </ButtonWrapper>
    </Form>
  );
}

const Form = styled.form`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 16px 0 8px 0;
  font-size: 12px;
`;

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;

const ErrorLabel = styled.p`
  color: ${Colors.dirtyRed};
  font-size: 12px;
`;