import { Avatar, Card, CardContent, Link, Typography } from "@material-ui/core";
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
  const nombre = data.data[0].nombre;
  const apellido = data.data[0].primerApellido;
  const edad = data.data[0].edad;
  const altura = data.data[0].altura;
  const ciudad = data.data[0].ciudad;
  const genero = data.data[0].genero;
  const redes = data.data[0].redes;

  return (
    <SDiv>
      <SCard elevation={6}>
        <SAvatar src="img\asd.jpg" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardContent>
          <Typography variant="h6">{nombre + " " + apellido}</Typography>
          <Typography variant="h6">{`edad: ${edad}`}</Typography>
          <Typography variant="h6">{`altura: ${altura}`}</Typography>
          <Typography variant="h6">{`genero: ${genero}`}</Typography>
          <Typography variant="h6">{`ciudad: ${ciudad}`}</Typography>
          <hr />
          <Stack spacing={1}>
            <Link href={redes.twiter[0]}>
              <Twitter />
              {redes.twiter[1]}
            </Link>
            <Link href={redes.facebook[0]}>
              <Facebook />
              {redes.facebook[1]}
            </Link>
            <Link href={redes.instagram[0]}>
              <Instagram />
              {redes.instagram[1]}
            </Link>
          </Stack>
        </CardContent>
      </SCard>
    </SDiv>
  );
};
