import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";
import { UseGetProfile } from "./hooks/UseGetProfile";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const picAndName = UseGet();

  return (
    <Router>
      <Switch>
        {picAndName.map((item, index) => (
          <Route
            exact
            path={`/perfil/${item.pseudonimo}${item.id}`}
            key={index}
          >
            <UserProfile data={item.id} />
          </Route>
        ))}
        <Route exact path="/">
          <OpenFilter data={picAndName} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
