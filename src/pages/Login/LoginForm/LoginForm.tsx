import React from "react";
import styled from "styled-components";

import { TextInputField } from "src/components/TextInputField";

export function LoginForm() {
  const usernameString = "username";
  const passwordString = "password";

  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={usernameString}>Username</Label>
      <TextInputField name={usernameString} id={usernameString} />

      <Label htmlFor={passwordString}>Password</Label>
      <TextInputField name={passwordString} id={passwordString} />

      <input type="submit" value="Log in"></input>
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
