import { api } from "../../utils/api.utils";

import { TRAINER_ACTION_TYPES } from "./trainer.types";

export const getClients = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/api/trainer/${id}/clients`);

    console.log(response.data.data);

    dispatch({
      type: TRAINER_ACTION_TYPES.GET_CLIENTS_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: TRAINER_ACTION_TYPES.GET_CLIENTS_FAILED,
      payload: error.message
    });
  }
};