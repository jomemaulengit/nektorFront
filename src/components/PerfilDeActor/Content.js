import {
  Card,
  Tab,
  ImageList,
  ImageListItem,
  Button,
  Typography,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";

const CCard = styled(Card)`
  position: relative;
  left: 18vw;
  width: 68vw;
  height: 500px;

  @media (max-width: 768px) {
    position: relative;
    top: 25px;
    left: 3vw;
    width: 93vw;
    height: auto;
  }
`;

export const Content = (data) => {
  const fotos = data.data[0].fotos;
  const reel = data.data[0].reel;
  const [value, setValue] = useState("1");
  const l = fotos.length;

  return (
    <>
      <CCard elevation={6}>
        <TabContext value={value}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabList onChange={(e, newValue) => setValue(newValue)}>
              <Tab label="Fotos" value="1" />
              <Tab label="Reel" value="2" />
              <Tab label="Contacto" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ImageList variant="quilted">
              <Box style={{ width: "30vw", height: "400px" }}>
                {fotos.map((foto, i) => {
                  return (
                    <ImageListItem key={i}>
                      <img
                        style={{ width: "100%" }}
                        src={foto}
                        alt="foto"
                        loading="lazy"
                      />
                    </ImageListItem>
                  );
                }).slice(0,Math.trunc(l/2))}
              </Box>
              <Box style={{ width: "30vw", height: "400px" }}>
                {fotos.map((foto, i) => {
                  return (
                    <ImageListItem key={i}>
                      <img
                        style={{ width: "100%" }}
                        src={foto}
                        alt="foto"
                        loading="lazy"
                      />
                    </ImageListItem>
                  );
                }).slice(Math.trunc(l/2),l)}
              </Box>
            </ImageList>
          </TabPanel>
          <TabPanel value="2">
            <ReactPlayer url={reel} controls={true} width="auto" height={420} />
          </TabPanel>
          <TabPanel value="3">
            <Button size="small" color="primary">
              correo
            </Button>
            <Typography>{data.data[0].correo}</Typography>
            <Button size="small" color="primary">
              telefono
            </Button>
            <Typography>{data.data[0].telefono}</Typography>
            <Button size="small" color="primary">
              enviar notificacion
            </Button>
          </TabPanel>
        </TabContext>
      </CCard>
    </>
  );
};
