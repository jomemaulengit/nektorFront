import { CircularProgress } from "@mui/material";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const LoadingStyled = styled(Card)`
  margin: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 80vw;
  background-color: #f5f5f5;
`;

export const Loading = () => {
  return (
    <>
      <LoadingStyled elevation={4}>
        <CircularProgress />
      </LoadingStyled>
    </>
  );
};
