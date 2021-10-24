import axios from "axios";

//constantes
const initialState = {
  array: [],
};

//types
const GET_TAGS = "GET_TAGS";
const UPDATE_TAGS = "UPDATE_TAGS";

//reducer
export default function tagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        array: action.payload,
      };
      case UPDATE_TAGS:
      return {
        ...state,
        array: action.payload,
      }
    default:
      return state;
  }
}

//action creators
export const getTags = () => (dispatch, getState) => {
  axios
    .get(`http://localhost:8080/api/gettags`)
    .then((res) => {
      dispatch({
        type: GET_TAGS,
        payload: res.data.itemList.map((item) => ({
          tag: item.tag,
          color: item.color,
        })),
      });
    })
    .catch((err) => console.log(err));
};

export const updateTags = (tags) => (dispatch, getState) => {
      dispatch({
        type: UPDATE_TAGS,
        payload: tags.map((item) => ({
          tag: item.tag,
          color: item.color,
        })),
      });
};

