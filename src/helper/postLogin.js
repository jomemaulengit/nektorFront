import axios from "axios";

export const PostLogin = (data) => {
  axios({
    method: "post",
    url: "http://localhost:8080/api/user/login",
    headers: {},
    data: {
      data: data,
    },
  })
    .then(() => {
      console.log("hla mundo");
    })
    .catch((error) => {
      console.log(error);
    });
};
