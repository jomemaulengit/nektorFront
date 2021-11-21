import React from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";
import { CircularProgress } from "@material-ui/core";
import { CreateUser } from "./components/CreateUserForm/CreateUser";
import { EditUserProfile } from "./components/PerfilDeActor/EditProfile";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NavBar } from "./components/NavBar/NavBar";
import { Loading } from "./components/base/Loading";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const { data, loading } = UseGet();

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {loading ? (
            <Loading />
          ) : (
            data.map((item, index) => (
              <Route exact path={`/perfil/${item.id}`} key={index}>
                <EditUserProfile data={item.id} />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
