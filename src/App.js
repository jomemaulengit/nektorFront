import React from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";

const ProfileList = [
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
    tags: [
      "pelo corto",
      "cine",
      "ojos azules",
      "alto",
      "hombre",
      "caucasico",
      "blanco",
    ],
  },
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
    tags: [
      "pelo corto",
      "cine",
      "ojos azules",
      "alto",
      "hombre",
      "caucasico",
      "blanco",
    ],
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
    tags: ["pelo corto", "cine", "ojos cafes", "alto", "hombre", "blanco"],
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
    tags: ["pelo corto", "cine", "ojos cafes", "alto", "hombre", "blanco"],
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
    tags: [
      "pelo largo",
      "cine",
      "ojos azules",
      "alto",
      "mujer",
      "blanco",
      "rubio",
    ],
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
    tags: [
      "pelo largo",
      "cine",
      "ojos azules",
      "alto",
      "mujer",
      "blanco",
      "rubio",
    ],
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
    tags: [],
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
    tags: [],
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
    tags: ["calvo", "teatro", "ojos cafes", "bajo", "hombre", "blanco"],
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
    tags: ["calvo", "teatro", "ojos cafes", "bajo", "hombre", "blanco"],
  },
];

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());
  return (
    <Router>
      <Switch>
        {ProfileList.map((profile, key) => (
          <Route key={key} path={`/profile${key}`}>
            <UserProfile />
          </Route>
        ))}
        <Route exact path="/">
          <OpenFilter data={ProfileList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
