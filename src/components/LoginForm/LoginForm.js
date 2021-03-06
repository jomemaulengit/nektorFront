import React, { useState } from "react";
import {
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert, CssBaseline, InputLabel } from "@mui/material";
import {
  emailValidator,
  passwordValidator,
} from "../../helper/createUserValidator";
import { PostCreateUser } from "../../helper/postCreateUser";
import { Link } from "react-router-dom";
import { Visibility } from "@mui/icons-material";

export const LoginForm = () => {
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
      password: profile[14].value,
    });
  };
  const [warning, setwarning] = useState([false, false]);
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    let email = emailValidator(i.target.value);
    let pass = passwordValidator(i.target.value);
    setwarning(
      i.target.name.includes("mail")
        ? [email.res.params.flag, ...warning.slice(1)]
        : i.target.name.includes("password")
        ? [...warning.slice(0, 1), pass.res.params.flag]
        : [false, false]
    );
  };

  return (
    <Container>
      <CssBaseline />
      <Card elevation={6} style={{ marginTop: "100px" }}>
        <div style={{ margin: "20px" }}>
          <img
            src="/img/login.png"
            alt="logo"
            style={{ width: "300px", height: "220px" }}
          />
          {/* <Typography
            style={{
              marginLeft: "35px",
              fontVariantCaps: "all-small-caps",
              color: "#3f51f5",
            }}
            variant="h4"
            component="p"
          >
            Iniciar sesion
          </Typography> */}
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
              <Grid item xs={12} sm={12}>
                <TextField
                  error={!warning[0]}
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
                <Collapse in={!warning[0]}>
                  <Alert severity="error">
                    el correo debe tener un formato valido
                  </Alert>
                </Collapse>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputLabel htmlFor="password">Contrase??a</InputLabel>
                <OutlinedInput
                  error={!warning[1]}
                  name="password"
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  required
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {}}
                        edge="end"
                      >
                        <i className="material-icons">
                          <Visibility />
                        </i>
                      </IconButton>
                    </InputAdornment>
                  }
                  onInput={(i) => {
                    onInput(i, 50);
                  }}
                />
                <Collapse in={!warning[1]}>
                  <Alert severity="error">
                    su clave debe tener minimo 8 caracteres
                  </Alert>
                </Collapse>{" "}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  style={{
                    left: "14vw",
                    margin: "20px",
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Iniciar sesion
                </Button>
                <Link to="/createuser">
                  <Typography
                    style={{ margin: "20px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {"No tienes cuenta? Crea una"}
                  </Typography>
                </Link>
                <Link to="/perfil/changepassword">
                  <Typography
                    style={{ margin: "20px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {"olvidaste tu clave secreta? cambiala"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
      <br />
      <br />
    </Container>
  );
};
