import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "src/style/colors";
import { Logo } from "src/components/Logo";
import { LoginForm, FormValues } from "./LoginForm";
import { Actions } from "src/api/authService/actions";
import { ReduxState } from "src/store";
import { AuthService } from "src/api/authService/AuthService";
import { Paths } from "src/paths";
import { Redirect } from "react-router-dom";

export function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: ReduxState) => state.auth.isLoggingIn);
  const loginError = useSelector((state: ReduxState) => state.auth.loginError);

  function onSubmit(credentials: FormValues) {
    dispatch(Actions.login(credentials));
  }

  if (AuthService.isLoggedIn) {
    return <Redirect to={Paths.Servers} />;
  }

  return (
    <Wrapper>
      <Logo />
      <LoginForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        loginError={loginError}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 36px;
  width: 100%;
  background-color: ${Colors.almostBlack};
  min-height: 100%;
  box-sizing: border-box;

  @media all and (min-width: 480px) {
    min-height: auto;
    width: 400px;
    height: 600px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;
