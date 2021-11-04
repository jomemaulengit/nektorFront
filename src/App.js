import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getPicAndName, getTags } from "./redux/tagState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProfile } from "./components/PerfilDeActor/UserProfile";
import { UseGet } from "./hooks/useGet";

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  dispatch(getPicAndName());

  const picAndName = [
    {
      edad: "58",
      tumnail: "/img/LSGN.jpg",
      pseudonimo: "Luis Gnecco",
      tags: ["calvo", "teatro", "ojos cafes", "bajo", "hombre", "blanco"],
    },
    {
      edad: "58",
      tumnail: "/img/LSGN.jpg",
      pseudonimo: "Luis Gnecco",
      tags: ["calvo", "teatro", "ojos cafes", "bajo", "hombre", "blanco"],
    },
    {
      edad: "34",
      tumnail: "/img/asd.jpg",
      pseudonimo: "Tom Cruise",
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
      edad: "34",
      tumnail: "/img/asd.jpg",
      pseudonimo: "Tom Cruise",
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
      edad: "57",
      tumnail: "/img/KR.jpg",
      pseudonimo: "Keanu reeves",
      tags: ["pelo corto", "cine", "ojos cafes", "alto", "hombre", "blanco"],
    },
    {
      edad: "57",
      tumnail: "/img/KR.jpg",
      pseudonimo: "Keanu reeves",
      tags: ["pelo corto", "cine", "ojos cafes", "alto", "hombre", "blanco"],
    },
    {
      edad: "46",
      tumnail: "/img/CHTH.jpg",
      pseudonimo: "Charlize Theron",
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
      edad: "46",
      tumnail: "/img/CHTH.jpg",
      pseudonimo: "Charlize Theron",
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
      edad: "60",
      tumnail: "/img/CLCL.jpg",
      pseudonimo: "Calculon",
      tags: [],
    },
    {
      edad: "60",
      tumnail: "/img/CLCL.jpg",
      pseudonimo: "Calculon",
      tags: [],
    },
  ];

  return (
    <Router>
      <Switch>
        {picAndName.map((profile, key) => (
          <Route key={key} path={`/profile${key}`}>
            <UserProfile />
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
