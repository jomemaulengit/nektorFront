import { Grid } from "@chakra-ui/layout";
import Perfil from "./Perfil";
import React from "react";

const ProfileGrid = (data) => {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap={12} >
        {data.data.map((actor) => (
          <Perfil props={actor} />
        ))}
      </Grid>
    </>
  );
};
export default ProfileGrid;
