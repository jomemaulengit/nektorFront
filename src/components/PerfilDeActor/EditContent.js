import {
  Card,
  Tab,
  ImageList,
  ImageListItem,
  Button,
  Typography,
  TextField,
  Grid,
  Switch,
  ButtonBase,
  Avatar,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Delete } from "@mui/icons-material";
import { SpeedDialIcon } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";

const CCard = styled(Card)`
  position: relative;
  left: 18vw;
  width: 68vw;
  height: 550px;

  @media (max-width: 768px) {
    position: relative;
    top: 25px;
    left: 3vw;
    width: 93vw;
    height: auto;
  }
`;

export const EditContent = (data) => {
  const fotos = data.data.fotos;
  const reel = data.data.reel;
  const correo = data.data.correo;
  const telefono = data.data.telefono;
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
                {fotos
                  .map((foto, i) => {
                    return (
                      <ImageListItem key={i}>
                        <Button
                          variant="contained"
                          style={{
                            position: "absolute",
                            zIndex: "5",
                            backgroundColor: "rgba(25,4,30,0.4)",
                          }}
                        >
                          <Delete
                            style={{
                              width: "40px",
                              height: "40px",
                              cursor: "pointer",
                              color: "white",
                            }}
                          />
                        </Button>
                        <img
                          style={{ width: "100%" }}
                          src={foto}
                          alt="foto"
                          loading="lazy"
                        />
                      </ImageListItem>
                    );
                  })
                  .slice(0, Math.trunc(l / 2))}
                <ButtonBase
                  style={{
                    width: "30vw",
                    height: "30vw",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={"/img/cameraicon.png"}
                    alt="foto"
                    loading="lazy"
                  />
                </ButtonBase>
              </Box>
              <Box style={{ width: "30vw", height: "400px" }}>
                {fotos
                  .map((foto, i) => {
                    return (
                      <ImageListItem key={i}>
                        <Button
                          variant="contained"
                          style={{
                            position: "absolute",
                            zIndex: "5",
                            backgroundColor: "rgba(25,4,30,0.4)",
                          }}
                        >
                          <Delete
                            style={{
                              width: "40px",
                              height: "40px",
                              cursor: "pointer",
                              color: "white",
                            }}
                          />
                        </Button>

                        <img
                          style={{ width: "100%" }}
                          src={foto}
                          alt="foto"
                          loading="lazy"
                        />
                      </ImageListItem>
                    );
                  })
                  .slice(Math.trunc(l / 2), l)}
              </Box>
            </ImageList>
            <br />
            <Button type="submit" variant="contained" color="primary">
              Actualizar
            </Button>
          </TabPanel>
          <TabPanel value="2">
            <ReactPlayer url={reel} controls={true} width="auto" height={300} />
            <br />
            <br />
            <TextField
              autoComplete="reel"
              name="reel"
              variant="standard"
              required
              fullWidth
              id="reel"
              label="Link reel (video)"
              autoFocus
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Actualizar
            </Button>
          </TabPanel>
          <TabPanel value="3">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="correo"
                  name="mail"
                  variant="outlined"
                  required
                  fullWidth
                  id="mail"
                  label="correo"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="telefono"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Telefono"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button color="primary">Recibir notificaciones</Button>
                <Switch color="primary" label="Activo" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" color="primary">
                  Actualizar
                </Button>
              </Grid>
            </Grid>{" "}
          </TabPanel>
        </TabContext>
      </CCard>
    </>
  );
};
