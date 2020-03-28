import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "src/store/index";
import { Colors } from "src/style/colors";
import { ServerTable } from "./ServerTable";
import { Actions } from "src/pages/Servers/actions/serversActions";

export function Servers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchServers());
  }, [dispatch]);

  const servers = useSelector((state: ReduxState) => state.servers.servers);

  return (
    <Wrapper>
      <Logo>server explorer</Logo>
      <ServerTable servers={servers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 36px;
  width: 800px;
  min-width: 320px;
  /* height: 100%; */
  /* border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px; */
  background-color: ${Colors.almostBlack};
`;

const Logo = styled.h1`
  width: 300px;
  font-size: 60px;
  font-family: "Nunito", sans-serif;
  margin: 8px 0px;
  user-select: none;
`;
