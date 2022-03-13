import React from "react";
import styled from "styled-components";
import { CircularProgress, Grid } from "@material-ui/core";
import { EditSideBar } from "./EditSideBar";
import { EditContent } from "./EditContent";

const Div = styled.div`
  position: relative;
  background-color: floralwhite;

  @media (max-width: 760) {
    height: 100%;
  }
`;

export const EditUserProfile = (prop) => {
  console.log("EditProfile: ", prop.data);
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
        <>
          <EditSideBar data={prop} />
          <EditContent data={prop} />
        </>
      </Grid>
      <br />
      <br />
    </Div>
  );
};
