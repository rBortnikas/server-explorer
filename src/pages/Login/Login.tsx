import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Colors } from "src/style/colors";
import { LoginForm, FormValues } from "./LoginForm";
import { Actions } from "src/api/authService/actions";

export function Login() {
  const dispatch = useDispatch();

  async function onSubmit(credentials: FormValues) {
    dispatch(Actions.login(credentials));
  }
  return (
    <Wrapper>
      <Logo>server explorer</Logo>
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

const Logo = styled.h1`
  width: 300px;
  font-size: 60px;
  font-family: "Nunito", sans-serif;
  margin: 8px 0px;
  user-select: none;
`;
