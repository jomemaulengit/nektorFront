import React from "react";
import Perfil from "./components/MicroPerfil/Perfil";
import ProfileGrid from "./components/MicroPerfil/ProfileGrid";
import TagFilter from "./components/Tagfilter/TagFilter";

const ProfileList = [
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
    tumnail: "/img/CHTH.jpg",
    age: "35",
    name: "charlize theron",
  },
];

const tags=["caucasico","pelo corto","rubio","hombre","mujer","blanco","moreno"]

function App() {
  return (
    <>
      <TagFilter data={tags} />
      <ProfileGrid data={ProfileList} />
    </>
  );
}

export default App;
