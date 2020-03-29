import React from "react";
import styled from "styled-components";

import { Colors } from "src/style/colors";
import { FetchErrors } from "src/api/utils";

interface Props {
  loginError: any;
}

export function ErrorLabel({ loginError }: Props) {
  if (!loginError) {
    return null;
  }

  return (
    <Label>
      {loginError === FetchErrors.Unauthorized
        ? "Please check your login details and try again."
        : "Something went wrong, please try again later."}
    </Label>
  );
}

const Label = styled.div`
  color: ${Colors.dirtyRed};
  margin: 16px 0 8px 0;
  font-size: 12px;
`;
