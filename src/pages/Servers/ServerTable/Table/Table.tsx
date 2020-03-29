import React from "react";
import styled from "styled-components";
import { Server } from "src/pages/Servers/types";
import { Colors } from "src/style/colors";

interface Props {
  servers?: Server[];
}

export function Table({ servers }: Props) {
  return (
    <Wrapper>
      {servers?.map(server => (
        <ServerLine key={server.name + server.distance}>
          <div data-testid="server-name">{server.name}</div>
          <div data-testid="server-distance">{server.distance} km</div>
        </ServerLine>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${Colors.lightGrey};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
`;

const ServerLine = styled.div`
  overflow: hidden;
  color: ${Colors.almostBlack};
  padding: 12px 8px;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.almostBlack};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${Colors.darkerGrey};
  }
`;
