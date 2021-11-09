import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  margin-left: 3vw;
  width: 8vw;
`;
const SCard = styled(Card)`
  width: 25vw;
  left: 3vw;
  height: 500px;

  @media (max-width: 768px) {
    width: 93vw;
    height: auto;
  }
`;
const SAvatar = styled(Avatar)`
  position: absolute !important;
  width: 14vw !important;
  height: 14vw !important;
  top: 150px;
  margin-left: 5vw;
  box-shadow: 0px 0px 5px #000000;

  @media (max-width: 768px) {
    width: 190px !important;
    height: 190px !important;
    margin-left: 24vw;
    top: 150px;
    box-shadow: 0px 0px 5px #000000;
  }
`;

export const SideBar = (data) => {
  const tumnail = data.data.tumnail;
  const nombre = data.data.nombre;
  const primerApellido = data.data.primerApellido;
  const edad = data.data.edad;
  const genero = data.data.genero;
  const altura = data.data.altura;
  const ciudad = data.data.ciudad;
  const redes = data.data.redes;

  return (
    <SDiv>
      <SCard elevation={6}>
        <SAvatar src={tumnail} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardContent>
          <Typography>{nombre + " " + primerApellido}</Typography>
          <Typography>{`edad: ${edad}`}</Typography>
          <Typography>{`altura: ${altura}`}</Typography>
          <Typography>{`genero: ${genero}`}</Typography>
          <Typography>{`ciudad: ${ciudad}`}</Typography>
          <hr />
          <Stack spacing={1}>
            {Object.entries(redes).map(([key, value]) => (
              <Button
                key={key}
                color="primary"
                startIcon={
                  key === "facebook" ? (
                    <Facebook />
                  ) : key === "twiter" ? (
                    <Twitter />
                  ) : (
                    <Instagram />
                  )
                }
              >
                <Link href={value[0]}>{value[1]}</Link>
              </Button>
            ))}
          </Stack>
        </CardContent>
      </SCard>
    </SDiv>
  );
};
