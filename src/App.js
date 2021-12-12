import React from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";
import { CreateUser } from "./components/CreateUserForm/CreateUser";
// import { EditUserProfile } from "./components/PerfilDeActor/EditProfile";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { NavBar } from "./components/NavBar/NavBar";
import { Loading } from "./components/base/Loading";
// import { UseGetPics } from "./hooks/UseGetPics";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const { data, loading } = UseGet();
  // const {data:pics,loading:loading2} = UseGetPics();
  // console.log(pics);

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
