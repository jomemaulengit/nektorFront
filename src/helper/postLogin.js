import axios from "axios";

export const PostLogin = async (data) => {
  const postResponse = await axios({
    method: "post",
    url: "http://localhost:8080/api/user/login",
    headers: {},
    data: {
      data: data,
    },
  })
    .then((res) => {
      const retrieve = [res.data.data.profile, res.data.data.token];
      return retrieve;
    })
    .catch((error) => {
      console.log(error);
    });
  return postResponse;
};
