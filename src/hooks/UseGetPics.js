import axios from "axios";
import { useState, useEffect } from "react";

export const UseGetPics = (id) => {
  const [pics, setPics] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: "gs://nektor-66d87.appspot.com/",
      headers: {
        header1: "Access-Control-Allow-Headers",
        header2: "Origin, X-Requested-With",
        header3: " Content-Type, Accept",
      },
      data: {
        id: id,
      },
    })
      .then((response) => {
        setPics({
          data: response.data,
          loading: response.data ? false : true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return pics;
};
