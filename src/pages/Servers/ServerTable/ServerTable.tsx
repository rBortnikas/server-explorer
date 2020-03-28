import React from "react";
import styled from "styled-components";
import { Server } from "src/pages/Servers/types";
import { Colors } from "src/style/colors";
import { Table } from "./Table";
import { Toggle } from "src/components/Toggle";

interface Props {
  servers?: Server[];
}

export function ServerTable({ servers }: Props) {
  function handleOnChange(optionId: string) {
    console.log(optionId);
  }

  return (
    <Wrapper>
      <Toggle
        toggleText="Sort By"
        firstOptionLabel="Name"
        firstOptionId="name"
        secondOptionLabel="Distance"
        secondOptionId="distance"
        selectedOptionId="Distance"
        onChange={handleOnChange}
      />
      <Table servers={servers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
