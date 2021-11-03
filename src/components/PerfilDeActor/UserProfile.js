import React from "react";
import { Content } from "./Content";
import { SideBar } from "./SideBar";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Div = styled.div`
  position: relative;
  background-color: floralwhite;

  @media (max-width: 760) {
    height: 100%;
  }
`;

const profile = [
  {
    nombre: "Thomas",
    primerApellido: "Cruise",
    segundoApellido: "Mapother",
    edad: "34",
    genero: "Masculino",
    altura: "1.78",
    ciudad: "los angeles",
    tumnail: "/img/asd.jpg",
    pseudonimo: "Tom Cruise",
    reel: "https://www.youtube.com/watch?v=1_NbNhwid8M&t=17s&ab_channel=TomCruise",
    fotos: [
      "/img/TM1.jpg",
      "/img/TM1.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM1.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM3.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM2.jpg",
      "/img/TM3.jpg",
    ],
    redes: {
      instagram: [
        "https://www.instagram.com/tomcruise/?hl=es-la",
        "@TomCruise",
      ],
      twiter: ["https://twitter.com/tomcruise?lang=es", "@TomCruise"],
      facebook: ["https://www.facebook.com/tomcruise", "Tom cruise"],
    },
    telefono: "55-55-55-55",
    correo: "correogenerico.d@gmail.com",
    tags: [
      "pelo corto",
      "cine",
      "ojos azules",
      "alto",
      "hombre",
      "caucasico",
      "blanco",
    ],
  },
];

export const UserProfile = () => {
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
