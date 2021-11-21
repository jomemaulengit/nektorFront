import Perfil from "./Perfil";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <Div>
      <br />
      <br />
      <Grid container spacing={2}>
        {ProfileList.map((actor, key) => (
          <div key={key} style={{ margin: "5px" }}>
            <Link to={`/perfil/${actor.id}`}>
              <Grid item xs={6} md={3}>
                <Perfil props={actor} />
              </Grid>
            </Link>
          </div>
        ))}
      </Grid>
    </Div>
  );
};
export default ProfileGrid;
