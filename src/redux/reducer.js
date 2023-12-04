import {
  SET_URL,
  SET_ID_CAPA,
  SET_EVENT,
  SET_INFO,
  SET_LIMPIAR,
  SET_SHOW,
} from "./types";

const initialState = {
  idCapa: 1,
  url: "http://200.121.128.102:8080/geoserver/jockey/wms",
  event: false,
  info: [],
  limpiar: false,
  show: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ID_CAPA:
      return { ...state, idCapa: payload };
    case SET_URL:
      return { ...state, url: payload };
    case SET_EVENT:
      return { ...state, event: payload };
    case SET_INFO:
      return { ...state, info: payload };
    case SET_LIMPIAR:
      return { ...state, limpiar: payload };
    case SET_SHOW:
      return { ...state, show: payload };
    default:
      return state;
  }
};

export default reducer;
