import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/store/index";
import { Colors } from "src/style/colors";
import { Logo } from "src/components/Logo";
import { ServerTable } from "./ServerTable";
import { Actions } from "src/pages/Servers/actions/serversActions";
import { Actions as AuthActions } from "src/api/authService/actions";
import { Button } from "src/components/Button";

export function Servers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchServers());
  }, [dispatch]);

  const servers = useSelector((state: ReduxState) => state.servers.servers);
  const isFetching = useSelector(
    (state: ReduxState) => state.servers.isFetching
  );

  function logout() {
    dispatch(AuthActions.logout());
  }

  return (
    <Wrapper>
      <TopWrapper>
        <Logo />
        <ButtonWrapper>
          <Button onClick={logout}>Log out</Button>
        </ButtonWrapper>
      </TopWrapper>
      <ServerTable servers={servers} isLoading={isFetching} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 0 36px 36px 36px;
  width: 800px;
  background-color: ${Colors.almostBlack};
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
