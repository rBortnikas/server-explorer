import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "src/style/colors";
import { Logo } from "src/components/Logo";
import { LoginForm, FormValues } from "./LoginForm";
import { Actions } from "src/api/authService/actions";
import { ReduxState } from "src/store";

export function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: ReduxState) => state.auth.isLoggingIn);
  async function onSubmit(credentials: FormValues) {
    dispatch(Actions.login(credentials));
  }
  return (
    <Wrapper>
      <Logo />
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding: 36px;
  width: 100%;
  background-color: ${Colors.almostBlack};
  min-height: 100%;
  box-sizing: border-box;

  @media (min-width: 480px) {
    min-height: initial;
    width: 400px;
    height: 600px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`;
