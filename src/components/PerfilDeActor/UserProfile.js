import React, { useState } from "react";
import styled from "styled-components";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import { UseGetProfile } from "../../hooks/UseGetProfile";
import { SideBar } from "./SideBar";
import { Content } from "./Content";

const Div = styled.div`
  position: relative;
  background-color: floralwhite;

  @media (max-width: 760) {
    height: 100%;
  }
`;

export const UserProfile = (data) => {
  const id = data.data;
  const item = UseGetProfile(id);
  const [sideBar, setsideBar] = useState(<CircularProgress />);
  const [profile, setProfile] = useState({
    item: {
      id: "loading",
    },
  });

  const handleChange = () => {
    setProfile(item.item);
  };
  const lol = () => {
    setsideBar(
      <>
        <SideBar data={profile} />
        <Content data={profile} />
      </>
    );
  };

  return (
    <Div>
      <Button variant="contained" onClick={handleChange}>
        Cambiar
      </Button>

      <Button variant="contained" onClick={lol}>
        lol
      </Button>
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
        {sideBar}
        <br />
      </Grid>
      <br />
      <br />
    </Div>
  );
};
