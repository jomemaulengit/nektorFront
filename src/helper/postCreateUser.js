import axios from "axios";

export const PostCreateUser = (data) => {
  axios({
    method: "post",
    url: "http://localhost:8080/api/user/createuser",
    headers: {},
    data: {
      data: data,
    },
  })
    .then(() => {
      console.log("ok");
    })
    .catch((error) => {
      console.log(error);
    });
};
