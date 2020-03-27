import React, { useState } from "react";
import styled from "styled-components";
import { Formik, FormikErrors } from "formik";

import { TextInputField } from "src/components/TextInputField";
import { Button } from "src/components/Button";
import { Colors } from "src/style/colors";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

interface FormValues {
  username: string;
  password: string;
}

export function LoginForm({ onSubmit }: Props) {
  const usernameString = "username";
  const passwordString = "password";

  function handleSubmit({ username, password }: FormValues) {
    // e.preventDefault();

    if (username && password) {
      onSubmit(username, password);
    }
  }

  const initialValues: FormValues = {
    username: "",
    password: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleSubmit(values)}
      validate={values => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.username) {
          errors.username = "Username cannot be blank";
        }
        if (!values.password) {
          errors.password = "Password cannot be blank";
        }
        return errors;
      }}
    >
      {p => (
        <Form onSubmit={p.handleSubmit}>
          <Label htmlFor={usernameString}>Username</Label>
          <TextInputField
            name={usernameString}
            id={usernameString}
            // error={usernameBlankError}
            value={p.values.username}
            onChange={p.handleChange}
            autoFocus
          />
          {p.errors.username && p.touched.username && (
            <ErrorLabel>{p.errors.username}</ErrorLabel>
          )}

          <Label htmlFor={passwordString}>Password</Label>
          <TextInputField
            name={passwordString}
            id={passwordString}
            // error={passwordBlankError}
            onChange={p.handleChange}
            type={passwordString}
            value={p.values.password}
          />
          {p.errors.password && p.touched.username && (
            <ErrorLabel>{p.errors.password}</ErrorLabel>
          )}

          <ButtonWrapper>
            <Button fullWidth>{"Log In"}</Button>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
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
