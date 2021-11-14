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
import { SpeedDialIcon } from "@material-ui/lab";
import { Camera } from "@mui/icons-material";
import {
  emailValidator,
  phoneValidator,
  wordsValidator,
} from "../../helper/createUserValidator";
import { PostCreateUser } from "../../helper/postCreateUser";

export const CreateUser = () => {
  const handleSubmit = (e) => {
    const profile = e.target;
    e.preventDefault();
    PostCreateUser({
      nombre: profile[0].value,
      primerApellido: profile[2].value,
      segundoApellido: profile[4].value,
      edad: profile[6].value,
      genero: "indefinido",
      altura: "indefinido",
      ciudad: profile[8].value,
      tumnail: "indefinido",
      reel: "indefinido",
      fotos: [],
      redes: [],
      telefono: profile[10].value,
      correo: profile[12].value,
      tags: [],
    });
  };
  const [warning, setwarning] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    let word = wordsValidator(i.target.value);
    let email = emailValidator(i.target.value);
    let phone = phoneValidator(i.target.value);
    setwarning(
      i.target.name.includes("firstName")
        ? [word.res.params.flag, ...warning.slice(1)]
        : i.target.name.includes("fsur")
        ? [...warning.slice(0, 1), word.res.params.flag, ...warning.slice(2)]
        : i.target.name.includes("ssur")
        ? [...warning.slice(0, 2), word.res.params.flag, ...warning.slice(3)]
        : i.target.name.includes("city")
        ? [...warning.slice(0, 3), word.res.params.flag, ...warning.slice(4)]
        : i.target.name.includes("mail")
        ? [...warning.slice(0, 4), email.res.params.flag, ...warning.slice(5)]
        : i.target.name.includes("phone")
        ? [...warning.slice(0, 5), phone.res.params.flag, ...warning.slice(6)]
        : [false, false, false, false, false, false]
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
            left: "35%",
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
            left: "35%",
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
          <form
            noValidate
            onSubmit={(e) => {
              if (warning.every((v) => v === true)) {
                handleSubmit(e);
              } else {
                e.preventDefault();
                alert("Por favor, llene todos los campos correctamente");
              }
            }}
          >
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
                  error={!warning[5]}
                  autoComplete="telefono"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="telefono"
                  label="telefono"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 13);
                  }}
                />
                <Collapse in={!warning[5]}>
                  <Alert severity="error">
                    el formato de telefono no es valido
                  </Alert>
                </Collapse>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={!warning[4]}
                  autoComplete="correo"
                  name="mail"
                  variant="outlined"
                  required
                  fullWidth
                  id="mail"
                  label="correo"
                  autoFocus
                  onInput={(i) => {
                    onInput(i, 50);
                  }}
                />
                <Collapse in={!warning[4]}>
                  <Alert severity="error">
                    el correo debe tener un formato valido
                  </Alert>
                </Collapse>{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
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
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
};
