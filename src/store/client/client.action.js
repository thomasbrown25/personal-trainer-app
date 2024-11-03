import { api } from "../../utils/api.utils";

import { CLIENT_ACTION_TYPES } from "./client.types";

export const getClients = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/api/client/${id}/clients`);

    console.log(response.data.data);

    dispatch({
      type: CLIENT_ACTION_TYPES.GET_CLIENTS_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: CLIENT_ACTION_TYPES.GET_CLIENTS_FAILED,
      payload: error.message
    });
  }
};

export const addClient = (formData) => async (dispatch) => {
  try {
    const response = await api.post("/api/client/add-client", formData);

    dispatch({
      type: CLIENT_ACTION_TYPES.ADD_CLIENT_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: CLIENT_ACTION_TYPES.ADD_CLIENT_FAILED,
      payload: error.message
    });
  }
};

export const getClientsLastVisited = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/api/client/${id}/clients/last-visited`);

    dispatch({
      type: CLIENT_ACTION_TYPES.GET_CLIENTSLASTVISITED_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: CLIENT_ACTION_TYPES.GET_CLIENTSLASTVISITED_FAILED,
      payload: error.message
    });
  }
};
