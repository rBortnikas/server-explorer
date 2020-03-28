import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "src/style/colors";
import { Logo } from "src/components/Logo";
import { LoginForm, FormValues } from "./LoginForm";
import { Actions } from "src/api/authService/actions";

export function Login() {
  const dispatch = useDispatch();

  async function onSubmit(credentials: FormValues) {
    dispatch(Actions.login(credentials));
  }
  return (
    <Wrapper>
      <Logo />
      <LoginForm onSubmit={onSubmit} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 36px;
  width: 400px;
  min-width: 320px;
  height: 600px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${Colors.almostBlack};
`;
