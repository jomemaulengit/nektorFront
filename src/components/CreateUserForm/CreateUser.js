import React from "react";
import {
  Avatar,
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { CssBaseline } from "@mui/material";
import { Autocomplete, SpeedDialIcon } from "@material-ui/lab";
import { Camera } from "@mui/icons-material";
import { pseudonimusValidator } from "../../helper/createUserValidator";

export const CreateUser = () => {
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    pseudonimusValidator(i.target.value);
  };

  return (
    <Container>
      <CssBaseline />
      <Card elevation={6} style={{ marginTop: "100px" }}>
        <Avatar
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            left: "43vw",
            top: "8vh",
            zIndex: "1",
          }}
        >
          <Camera />
        </Avatar>
        <Avatar
          style={{
            position: "absolute",
            top: "18vh",
            left: "48vw",
            zIndex: "2",
            backgroundColor: "darkcyan",
          }}
        >
          <SpeedDialIcon />
        </Avatar>
        <div style={{ margin: "20px" }}>
          <br />
          <br />
          <Typography component="h1" variant="h5">
            Crear cuenta de usuario
          </Typography>
          <form noValidate onSubmit={() => console.log("hola mundo")}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="pseudo"
                  name="pseudo"
                  variant="outlined"
                  required
                  fullWidth
                  id="pseudo"
                  label="pseudonimo"
                  autoFocus
                  onInput={(i) => onInput(i, 40)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="papellido"
                  name="fsur"
                  variant="outlined"
                  required
                  fullWidth
                  id="fsur"
                  label="primer apellido"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2021-01-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Autocomplete
                  id="combo-box-demo"
                  disablePortal
                  options={["Femenino", "LGBT+", "Masculino"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Sexo" variant="outlined" />
                  )}
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
                  autoComplete="telefono"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="telefono"
                  label="telefono"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Button
                style={{
                  left: "38vw",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Crear perfil
              </Button>
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
};
