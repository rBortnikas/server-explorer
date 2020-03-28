import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Server } from "src/pages/Servers/types";
import { Table } from "./Table";
import { Toggle } from "src/components/Toggle";
import {
  sortByObjectStringProp,
  sortByObjectNumberProp
} from "src/utils/sortingUtils";
interface Props {
  servers?: Server[];
}

const ToggleOptions = {
  name: "name",
  distance: "distance"
};

export function ServerTable({ servers = [] }: Props) {
  const [sortedServers, setSortedServers] = useState(servers);
  const [sortBy, setSortBy] = useState(ToggleOptions.name);
  const [sortOrderAscending, setSortOrderAscending] = useState(true);

  useEffect(() => {
    if (sortBy === ToggleOptions.name) {
      setSortedServers([
        ...sortByObjectStringProp(servers, "name", sortOrderAscending)
      ]);
    } else {
      setSortedServers([
        ...sortByObjectNumberProp(servers, "distance", sortOrderAscending)
      ]);
    }
  }, [servers, sortOrderAscending, sortBy]);

  function handleClick(optionId: string) {
    if (sortBy === optionId) {
      setSortOrderAscending(!sortOrderAscending);
    } else {
      setSortBy(optionId);
      setSortOrderAscending(true);
    }
  }

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle
          toggleText="Sort by"
          firstOptionLabel="Name"
          firstOptionId={ToggleOptions.name}
          secondOptionLabel="Distance"
          secondOptionId={ToggleOptions.distance}
          selectedOptionId={sortBy}
          onClick={handleClick}
        />
      </ToggleWrapper>
      <Table servers={sortedServers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ToggleWrapper = styled.div`
  align-self: flex-end;
`;
