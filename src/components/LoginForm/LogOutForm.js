import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const CardStyled = styled(Card)`
  margin-top: 5vw;
  margin-left: 27vw;
  display: flex;
  align-items: center;
  height: 60vh;
  width: 40vw;
  background-color: #f5f5f5;

  @media (max-width: 600px) {
    margin-left: 10vw;
    margin-top: 10vw;
    height: 60vh;
    width: 80vw;
  }
`;

export const LogOutForm = () => {
  return (
    <>
      <CardStyled elevation={4}>
        <CardHeader title="¿Estás seguro de que quieres cerrar sesión?" />
        <Divider />
        <CardContent>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Si, continuar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            No, volver
          </Button>
        </CardContent>
      </CardStyled>
    </>
  );
};
