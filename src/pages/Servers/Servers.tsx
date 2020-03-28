import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/store/index";
import { Colors } from "src/style/colors";
import { Logo } from "src/components/Logo";
import { ServerTable } from "./ServerTable";
import { Actions } from "src/pages/Servers/actions/serversActions";
import { Button } from "src/components/Button";
export function Servers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchServers());
  }, [dispatch]);

  const servers = useSelector((state: ReduxState) => state.servers.servers);

  return (
    <Wrapper>
      <Logo />
      <Button>Log out</Button>
      <ServerTable servers={servers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 36px;
  width: 800px;
  min-width: 320px;
  background-color: ${Colors.almostBlack};
`;
