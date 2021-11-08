import axios from "axios";
import { useState, useEffect } from "react";

export const UseGet = () => {
  const [picAndNameState, setPicAndNameState] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getavatar`)
      .then((res) => {
        setPicAndNameState(
          res.data.itemList.map((item) => ({
            id: item._id,
            edad: item.edad,
            tumnail: item.tumnail,
            pseudonimo: item.pseudonimo,
            tags: item.tags,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return picAndNameState;
};
