import React from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";
import { AuthService } from "src/api/AuthService";
import { ServerService } from "src/api/ServerService";
import { LoginForm, FormValues } from "./LoginForm";

export function Login() {
  async function onSubmit(credentials: FormValues) {
    await AuthService.login(credentials);
    const token = AuthService.getAuthToken();
    // @ts-ignore
    const servers = await ServerService.fetchServers(token);
    console.log({ servers });
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
