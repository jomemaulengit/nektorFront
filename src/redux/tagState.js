import axios from "axios";

//constantes
const initialState = {
  array: [],
  profiles: [],
  picAndName: [],
};

//types
const GET_TAGS = "GET_TAGS";
const UPDATE_TAGS = "UPDATE_TAGS";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const GET_PIC_AND_NAME = "GET_PIC_AND_NAME";

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
    case GET_PIC_AND_NAME:
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

export const getPicAndName = () => (dispatch, getState) => {
  console.log("lolazo");
  axios
    .get(`http://localhost:8080/api/getavatar`)
    .then((res) => {
      dispatch({
        type: GET_PIC_AND_NAME,
        payload: res.data.itemList.map((item) => ({
          edad: item.edad,
          tumnail: item.tumnail,
          pseudonimo: item.pseudonimo,
          tags: item.tags,
        })),
      });
    })
    .catch((err) => console.log(err));
};

// export const getPicAndName = () => (dispatch, getState) => {
//   console.log("lolazo");
//   axios
//     .get(`http://localhost:8080/api/getavatar`)
//     .then((res) => {
//       dispatch({
//         type: GET_PIC_AND_NAME,
//         payload: res.data.itemList.map((item) => ({
//           nombre: item.nombre,
//           primerApellido: item.primerApellido,
//           segundoApellido: item.segundoApellido,
//           edad: item.edad,
//           genero: item.genero,
//           altura: item.altura,
//           ciudad: item.ciudad,
//           tumnail: item.tumnail,
//           pseudonimo: item.pseudonimo,
//           reel: item.reel,
//           fotos: item.fotos,
//           redes: item.redes,
//           telefono: item.telefono,
//           correo: item.correo,
//           tags: item.tags,
//         })),
//       });
//     })
//     .catch((err) => console.log(err));
// };
