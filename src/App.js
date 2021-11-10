import React from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";
import { CircularProgress } from "@material-ui/core";
import { CreateUser } from "./components/CreateUserForm/CreateUser";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const { data, loading } = UseGet();

  return (
    <Router>
      <Switch>
        {loading ? (
          <CircularProgress />
        ) : (
          data.map((item, index) => (
            <Route exact path={`/perfil/${item.id}`} key={index}>
              <UserProfile data={item.id} />
            </Route>
          ))
        )}
        <Route exact path="/">
          <OpenFilter data={data} />
        </Route>
        <Route exact path="/createuser">
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
