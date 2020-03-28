import React from "react";
import styled from "styled-components";
import { Server } from "src/pages/Servers/types";
import { Colors } from "src/style/colors";
import { Table } from "./Table";

interface Props {
  servers?: Server[];
}

export function ServerTable({ servers }: Props) {
  return (
    <Wrapper>
      <Table servers={servers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
