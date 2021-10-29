import Perfil from "./Perfil";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
// import { OpenFilter } from "../Tagfilter/OpenFilter";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../../redux/tagState";

const Div = styled.div`
  margin-left: 15vw;
  margin-right: 15vw;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 6vw;
    margin-right: 6vw;
  }
`;

const ProfileGrid = (data) => {
  const ProfileList = data.data;
  console.log(ProfileList);
  return (
    <Div>
      <br />
      <br />
      <Grid container spacing={2}>
        {ProfileList.map((actor, key) => (
          <Grid item xs={6} md={3} key={key}>
            <Perfil props={actor} key={key} />
          </Grid>
        ))}
      </Grid>
    </Div>
  );
};
export default ProfileGrid;
