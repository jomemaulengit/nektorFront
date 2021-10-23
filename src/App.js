import React from "react";
import { useDispatch } from "react-redux";
import ProfileGrid from "./components/MicroPerfil/ProfileGrid";
import { getTags } from "./redux/tagState";


const ProfileList = [
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
  },
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
  },
];

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  return (
    <>
      <br />
      <ProfileGrid data={ProfileList} />
    </>
  );
}

export default App;
