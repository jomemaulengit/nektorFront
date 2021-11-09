import React from "react";
import styled from "styled-components";
import { CircularProgress, Grid } from "@material-ui/core";
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

export const UserProfile = (prop) => {
  const id = prop.data;
  const { data, loading } = UseGetProfile(id);
  return (
    <Div>
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
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <SideBar data={data.item} />
            <Content data={data.item} />
          </>
        )}
      </Grid>
      <br />
      <br />
    </Div>
  );
};
