import axios from "axios";
import { useState, useEffect } from "react";

export const UseGetProfile = (id) => {
  const [profile, setprofile] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/profilebyid",
      headers: {},
      data: {
        id: id,
      },
    })
      .then((response) => {
        setprofile({
          data: response.data,
          loading: response.data ? false : true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return profile;
};
