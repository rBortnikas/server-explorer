import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  toggleText: string;
  firstOptionLabel: string;
  secondOptionLabel: string;
  firstOptionId: string;
  secondOptionId: string;
  onClick: (optionID: string) => void;
  selectedOptionId: string;
}

export function Toggle(props: Props) {
  const {
    toggleText,
    firstOptionLabel,
    secondOptionLabel,
    firstOptionId,
    secondOptionId,
    onClick,
    selectedOptionId
  } = props;

  function handleClick(optionId: string) {
    onClick(optionId);
  }
  return (
    <Wrapper>
      <ToggleText>{toggleText}:</ToggleText>
      <OptionText
        id={firstOptionId}
        selected={firstOptionId === selectedOptionId}
        onClick={() => handleClick(firstOptionId)}
      >
        {firstOptionLabel}
      </OptionText>
      <OptionText
        id={secondOptionId}
        selected={secondOptionId === selectedOptionId}
        onClick={() => handleClick(secondOptionId)}
      >
        {secondOptionLabel}
      </OptionText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 4px;
`;

const ToggleText = styled.div`
  cursor: default;
  color: ${Colors.white};
`;

const OptionText = styled.button<{ selected: boolean }>`
  cursor: pointer;
  outline: none;
  box-shadow: none;
  border: none;
  background-color: transparent;
  margin: 0 0 8px 16px;
  color: ${p => (p.selected ? Colors.white : Colors.darkerGrey)};
  ${p => p.selected && `border-bottom: 2px solid ${Colors.white}`};
`;
