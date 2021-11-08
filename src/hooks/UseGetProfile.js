import axios from "axios";
import { useState, useEffect } from "react";

export const UseGetProfile = (id) => {
  const [profile, setprofile] = useState([]);
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
        setprofile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return profile;
};
