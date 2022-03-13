import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";
import { CreateUser } from "./components/CreateUserForm/CreateUser";
import { EditUserProfile } from "./components/PerfilDeActor/EditProfile";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NavBar } from "./components/NavBar/NavBar";
import { Loading } from "./components/base/Loading";
import { LogedInNavBar } from "./components/NavBar/logedInNavBar";
import { LogOutForm } from "./components/LoginForm/LogOutForm";
import { UseGetPics } from "./hooks/UseGetPics";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const { data, loading } = UseGet();
  const { profile, token } = useSelector((state) => state.tags.activeProfile);
  const {data:pics,loading:loading2} = UseGetPics();

  return (
    <>
      <Router>
        {token ? <LogedInNavBar /> : <NavBar />}
        <Switch>
          {loading ? (
            <Loading />
          ) : (
            data.map((item, index) => (
              <Route exact path={`/perfil/${item.id}`} key={index}>
                <UserProfile data={item.id} />
              </Route>
            ))
          )}
          <Route exact path="/">
            <br />
            <OpenFilter data={data} />
          </Route>
          <Route exact path="/createuser">
            <CreateUser />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/logout">
            <LogOutForm />
          </Route>
          {token ? (
            <Route exact path="/editprofile">
              {profile ? <EditUserProfile prop={profile} /> : <> </>}
            </Route>
          ) : null}
        </Switch>
      </Router>
    </>
  );
}

export default App;
