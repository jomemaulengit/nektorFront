import Perfil from "./Perfil";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { OpenFilter } from "../Tagfilter/OpenFilter";
import { useSelector } from "react-redux";

const Div = styled.div`
  margin-left: 15vw;
  margin-right: 15vw;
  position: relative;
`;

const ProfileGrid = (data) => {
  const labels = useSelector((state) => state.tags.array);
  console.log(labels);

  return (
    <Div>
      <OpenFilter data={labels} />
      <br />
      <br />
      <Grid container spacing={2}>
        {data.data.map((actor, key) => (
          <Grid item xs={6} md={3} key={key}>
            <Perfil props={actor} key={key} />
          </Grid>
        ))}
      </Grid>
    </Div>
  );
};
export default ProfileGrid;
