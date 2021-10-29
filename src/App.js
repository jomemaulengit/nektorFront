import React from "react";
import { useDispatch } from "react-redux";
import { OpenFilter } from "./components/Tagfilter/OpenFilter";
import { getTags } from "./redux/tagState";

const ProfileList = [
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
    tag_a: "blanco",
    tag_b: "caucasico",
    tag_c: "hombre",
    tag_d: "cine",
  },
  {
    tumnail: "/img/asd.jpg",
    age: "34",
    name: "Tom Cruise",
    tag_a: "blanco",
    tag_b: "caucasico",
    tag_c: "hombre",
    tag_d: "cine",
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
    tag_a: "blanco",
    tag_b: "hombre",
    tag_c: "ojos cafes",
    tag_d: "alto",
  },
  {
    tumnail: "/img/KR.jpg",
    age: "45",
    name: "Keanu reeves",
    tag_a: "blanco",
    tag_b: "hombre",
    tag_c: "ojos cafes",
    tag_d: "alto",
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
    tag_a: "mujer",
    tag_b: "rubio",
    tag_c: "caucasico",
    tag_d: "cine",
  },
  {
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
    tag_a: "mujer",
    tag_b: "rubio",
    tag_c: "caucasico",
    tag_d: "cine",
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
    tag_a: "alto",
  },
  {
    tumnail: "/img/CLCL.jpg",
    age: "200",
    name: "Calculon",
    tag_a: "alto",
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
    tag_a: "hombre",
    tag_b: "calvo",
    tag_c: "bajo",
    tag_d: "blanco",
  },
  {
    tumnail: "/img/LSGN.jpg",
    age: "54",
    name: "Luis Gnecco",
    tag_a: "hombre",
    tag_b: "calvo",
    tag_c: "bajo",
    tag_d: "blanco",
  },
];

function App() {
  const dispatch = useDispatch();
  dispatch(getTags());
  return (
    <>
      <br />
      <OpenFilter data={ProfileList} />
    </>
  );
}

export default App;
