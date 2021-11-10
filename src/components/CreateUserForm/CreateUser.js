import React, { useState } from "react";
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
import { Alert, CssBaseline } from "@mui/material";
import { Autocomplete, SpeedDialIcon } from "@material-ui/lab";
import { Camera } from "@mui/icons-material";
import { wordsValidator } from "../../helper/createUserValidator";

export const CreateUser = () => {
  const [warning, setwarning] = useState([false, false, false, false]);
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    let word = wordsValidator(i.target.value);
    setwarning(
      i.target.name.includes("firstName")
        ? [word.res.params.flag, ...warning.slice(1)]
        : i.target.name.includes("fsur")
        ? [...warning.slice(0, 1), word.res.params.flag, ...warning.slice(2)]
        : i.target.name.includes("ssur")
        ? [...warning.slice(0, 2), word.res.params.flag, ...warning.slice(3)]
        : i.target.name.includes("city")
        ? [...warning.slice(0, 3), word.res.params.flag, ...warning.slice(4)]
        : [false, false, false, false]
    );
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
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!warning[0]}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 20);
                  }}
                />
                <Collapse in={!warning[0]}>
                  <Alert severity="error">
                    el campo debe tener minimo 3 letras y no debe tener
                    espacios,simbolos o numeros
                  </Alert>
                </Collapse>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!warning[1]}
                  autoComplete="papellido"
                  name="fsur"
                  variant="outlined"
                  required
                  fullWidth
                  id="fsur"
                  label="primer apellido"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 20);
                  }}
                />
                <Collapse in={!warning[1]}>
                  <Alert severity="error">
                    el campo debe tener minimo 3 letras y no debe tener
                    espacios,simbolos o numeros
                  </Alert>
                </Collapse>{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={!warning[2]}
                  autoComplete="sapellido"
                  name="ssur"
                  variant="outlined"
                  required
                  fullWidth
                  id="fsur"
                  label="segurndo apellido"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 20);
                  }}
                />
                <Collapse in={!warning[2]}>
                  <Alert severity="error">
                    el campo debe tener minimo 3 letras y no debe tener
                    espacios,simbolos o numeros
                  </Alert>
                </Collapse>{" "}
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
                  error={!warning[3]}
                  autoComplete="ciudad"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="ciudad"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 20);
                  }}
                />
                <Collapse in={!warning[3]}>
                  <Alert severity="error">
                    el campo debe tener minimo 3 letras y no debe tener
                    espacios,simbolos o numeros
                  </Alert>
                </Collapse>{" "}
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
