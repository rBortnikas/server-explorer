import React from "react";
import styled from "styled-components";
import { Colors } from "src/style/colors";

interface Props {
  toggleText: string;
  firstOptionLabel: string;
  secondOptionLabel: string;
  firstOptionId: string;
  secondOptionId: string;
  onChange: (optionID: string) => void;
  selectedOptionId: string;
}

export function Toggle(props: Props) {
  const {
    toggleText,
    firstOptionLabel,
    secondOptionLabel,
    firstOptionId,
    secondOptionId,
    onChange,
    selectedOptionId
  } = props;

  function handleClick(optionId: string) {
    onChange(optionId);
  }
  return (
    <Wrapper>
      <ToggleText>{toggleText}: </ToggleText>
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
  color: ${Colors.white};
`;

const OptionText = styled.div<{ selected: boolean }>`
  margin: 0 8px;
  color: ${p => (p.selected ? Colors.white : Colors.lightGrey)};
  ${p => p.selected && `border-bottom: 2px solid ${Colors.white}`};
  ${p => p.selected && "font-weight: 700"};
`;
