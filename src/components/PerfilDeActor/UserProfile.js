import React, { useEffect, useState } from "react";
import { Content } from "./Content";
import { SideBar } from "./SideBar";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { UseGetProfile } from "../../hooks/UseGetProfile";

const Div = styled.div`
  position: relative;
  background-color: floralwhite;

  @media (max-width: 760) {
    height: 100%;
  }
`;

export const UserProfile = (data) => {
  const id = data.data;
  const res = UseGetProfile(id);
  let profile = [
    {
      id: "loading",
      nombre: "loading",
      primerApellido: "loading",
      segundoApellido: "loading",
      edad: "loading",
      genero: "loading",
      altura: "loading",
      ciudad: "loading",
      tumnail: "loading",
      pseudonimo: "loading",
      reel: "loading",
      fotos: ["loading"],
      redes: {
        twiter: ["loading"],
        instagram: ["loading"],
        facebook: ["loading"],
      },
      telefono: "loading",
      correo: "loading",
      tags: ["loading"],
    },
  ];

  console.log(res.item)

  return (
    <Div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container columns={{ xs: 2, md: 2 }}>
        <SideBar data={profile} />
        <Content data={profile} />
      </Grid>
      <br />
      <br />
    </Div>
  );
};
