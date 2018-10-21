import React from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";

type Size = "small" | "big";

interface Props {
  size?: Size;
  color?: Colors;
}

export function Loader(props: Props) {
  const { size = "small", color = Colors.white } = props;

  return <Spinner color={color} size={size} />;
}

const Spinner = styled.div<{ color: Colors; size: Size }>`
  margin: 0 auto;
  border: solid ${p => (p.size === "small" ? "5px " : "15px ") + p.color};
  border-top: solid ${p => (p.size === "small" ? "5px " : "15px ")} transparent;
  border-radius: 50%;
  width: ${p => (p.size === "small" ? "14" : "40")}px;
  height: ${p => (p.size === "small" ? "14" : "40")}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
