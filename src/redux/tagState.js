import axios from "axios";

//constantes
const initialState = {
  array: [],
  profiles: [],
  completeProfiles: [],
};

//types
const GET_TAGS = "GET_TAGS";
const UPDATE_TAGS = "UPDATE_TAGS";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const GET_COMPLETE_PROFILE = "GET_COMPLETE_PROFILE";

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
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: action.payload,
      };
    case GET_COMPLETE_PROFILE:
      return {
        ...state,
        completeProfiles: action.payload,
      };
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

export const getProfile = (profiles) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE,
    payload: profiles.map((item) => item),
  });
};

export const getCompleteProfile =
  (completeProfiles) => (dispatch, getState) => {
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
