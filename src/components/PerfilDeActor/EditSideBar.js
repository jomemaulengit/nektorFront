import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  margin-left: 3vw;
  width: 8vw;
`;
const SCard = styled(Card)`
  width: 25vw;
  left: 3vw;
  height: 550px;

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

export const EditSideBar = (data) => {
  const tumnail = data.data.tumnail;
  const nombre = data.data.nombre;
  const primerApellido = data.data.primerApellido;
  const edad = data.data.edad;

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                {`nombre: ${nombre} ${primerApellido}`}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {`edad: ${edad}`}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="ciudad"
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="ciudad"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="altura"
                name="tall"
                variant="outlined"
                required
                fullWidth
                id="tall"
                label="altura"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="instagram"
                name="insta"
                variant="standard"
                required
                fullWidth
                id="insta"
                label="Link Instagram"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="instname"
                name="instname"
                variant="standard"
                required
                fullWidth
                id="instname"
                label="Nombre Instagram"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="twitter"
                name="twit"
                variant="standard"
                required
                fullWidth
                id="twit"
                label="Link Twitter"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="twitname"
                name="twitname"
                variant="standard"
                required
                fullWidth
                id="twitname"
                label="Nombre Twitter"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="facebook"
                name="face"
                variant="standard"
                required
                fullWidth
                id="face"
                label="Link Facebook"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="facename"
                name="facename"
                variant="standard"
                required
                fullWidth
                id="facename"
                label="Nombre Facebook"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" color="primary">
                Actualizar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </SCard>
    </SDiv>
  );
};
