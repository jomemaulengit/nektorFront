import {
  AppBar,
  Fab,
  Slide,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Button,
} from "@material-ui/core";
import { useScrollTrigger, Zoom } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Home, KeyboardArrowUp } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 50,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        id="back-to-top-anchor"
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: "5%",
          right: "5%",
          zIndex: "99",
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const [isOpen, setOpen] = React.useState(false);

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!isOpen);

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <Box
      sx={{ width: side === "top" || side === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem
          onClick={toggleDrawer(side, false)}
          button
          component={Link}
          to="/"
        >
          <ListItemIcon>
            <Home />
            <Typography variant="h6">Home</Typography>
          </ListItemIcon>
        </ListItem>
        <Divider />

        <ListItem onClick={toggleDrawer(side, false)}>
          <ListItemIcon>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Iniciar sesion
            </Button>
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem onClick={toggleDrawer(side, false)}>
          <ListItemIcon>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/createuser"
            >
              Registrarse
            </Button>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {sideList(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export const NavBar = (props) => {
  const token = useSelector((state) => state.tags.activeProfile.token);
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <TemporaryDrawer />
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6">NEKTOR</Typography>
            </Link>
            <span style={{ flexGrow: 1 }} />
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              {token ? (
                <Fab variant="extended" size="small" color="secondary">
                  <Typography variant="h6" style={{ margin: "20px" }}>
                    LOGOUT
                  </Typography>
                </Fab>
              ) : (
                <Fab variant="extended" size="small" color="secondary">
                  <Typography variant="h6" style={{ margin: "20px" }}>
                    LOGIN
                  </Typography>
                </Fab>
              )}
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" aria-label="scroll-back-to-top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
