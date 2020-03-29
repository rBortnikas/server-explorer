import React from "react";
import styled from "styled-components";
import { Formik, FormikErrors } from "formik";

import { TextInputField } from "src/components/TextInputField";
import { Button } from "src/components/Button";
import { Loader } from "src/components/Loader";
import { ErrorLabel } from "./ErrorLabel";
export interface FormValues {
  username: string;
  password: string;
}
interface Props {
  onSubmit: ({ username, password }: FormValues) => void;
  isLoading: boolean;
  loginError: any;
}

export function LoginForm({ onSubmit, isLoading, loginError }: Props) {
  const usernameString = "username";
  const passwordString = "password";
  const initialValues: FormValues = {
    username: "",
    password: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => onSubmit(values)}
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
          <TextInputField
            name={usernameString}
            id={usernameString}
            value={p.values.username}
            onChange={p.handleChange}
            autoFocus
            label="Username"
            error={p.touched.username && p.errors.username}
          />

          <TextInputField
            name={passwordString}
            id={passwordString}
            onChange={p.handleChange}
            type={passwordString}
            value={p.values.password}
            label="Password"
            error={p.touched.password && p.errors.password}
          />
          <ErrorLabel loginError={loginError} />
          <ButtonWrapper>
            <Button type="submit" fullWidth>
              {isLoading ? <Loader /> : "Log in"}
            </Button>
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

const ButtonWrapper = styled.div`
  margin-top: 32px;
`;
