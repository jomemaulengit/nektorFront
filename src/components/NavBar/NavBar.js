import { AppBar, Fab, Slide, Toolbar, Typography } from "@material-ui/core";
import { useScrollTrigger, Zoom } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

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

export const NavBar = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Hamburger />
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6">NEKTOR</Typography>
            </Link>
            <span style={{ flexGrow: 1 }} />
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Fab variant="extended" size="small" color="secondary">
                <Typography variant="h6" style={{margin:"20px"}}>LOGIN</Typography>
              </Fab>
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
