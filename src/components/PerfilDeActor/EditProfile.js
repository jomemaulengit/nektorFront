import React from "react";
import styled from "styled-components";
import { CircularProgress, Grid } from "@material-ui/core";
import { UseGetProfile } from "../../hooks/UseGetProfile";
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
            <EditSideBar data={data.item} />
            <EditContent data={data.item} />
          </>
        )}
      </Grid>
      <br />
      <br />
    </Div>
  );
};
