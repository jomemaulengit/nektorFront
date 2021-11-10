import axios from "axios";
import { useState, useEffect } from "react";

export const UseGet = () => {
  const [picAndNameState, setPicAndNameState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getavatar`)
      .then((res) => {
        setPicAndNameState({
          data: res.data.itemList.map((item) => ({
            id: item._id,
            edad: item.edad,
            nombre: item.nombre,
            primerApellido: item.primerApellido,
            tumnail: item.tumnail,
            tags: item.tags,
          })),
          loading: res.data ? false : true,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return picAndNameState;
};
