import { TRAINER_ACTION_TYPES } from "./trainer.types";

const initialState = {
  clients: [],
  loading: true,
  error: null
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TRAINER_ACTION_TYPES.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: payload,
        loading: false,
        error: null
      };

    case TRAINER_ACTION_TYPES.GET_CLIENTS_FAILED:
      return {
        ...state,
        error: payload
      };

    case TRAINER_ACTION_TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
}

export default userReducer;
