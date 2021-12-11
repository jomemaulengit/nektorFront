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
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
