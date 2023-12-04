import { SET_URL, 
    SET_ID_CAPA, 
    SET_EVENT, 
    SET_INFO,
    SET_LIMPIAR,
    SET_SHOW 
} from "./types";

export const setUrl = (url) => {
  return {
    type: SET_URL,
    payload: url,
  };
};

export const setIdCapa = (id) => {
  return {
    type: SET_ID_CAPA,
    payload: id,
  };
};

export const setEvent = (event) => {
  return {
    type: SET_EVENT,
    payload: event,
  };
};

export const setInfo = (info) => {
  return {
    type: SET_INFO,
    payload: info,
  };
};

export const setLimpiar = (limpiar) => {
  return {
    type: SET_LIMPIAR,
    payload: limpiar,
  };
};

export const setShow = (show) => {
  return {
    type: SET_SHOW,
    payload: show,
  };
};
