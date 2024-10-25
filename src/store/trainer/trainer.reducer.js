import { TRAINER_ACTION_TYPES } from "./trainer.types";

const initialState = {
  clients: [],
  clientsLastVisited: [],
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

    case TRAINER_ACTION_TYPES.ADD_CLIENT_SUCCESS:
      return {
        ...state,
        clients: [...state.clients, payload]
      };

    case TRAINER_ACTION_TYPES.GET_CLIENTS_FAILED:
    case TRAINER_ACTION_TYPES.ADD_CLIENT_FAILED:
      return {
        ...state,
        error: payload
      };

    case TRAINER_ACTION_TYPES.GET_CLIENTSLASTVISITED_SUCCESS:
      return {
        ...state,
        clientsLastVisited: payload,
        loading: false,
        error: null
      };

    case TRAINER_ACTION_TYPES.GET_CLIENTSLASTVISITED_FAILED:
      return {
        ...state,
        clientsLastVisited: [],
        loading: false,
        error: payload
      };

    case TRAINER_ACTION_TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
}

export default userReducer;
