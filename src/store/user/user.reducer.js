import { USER_ACTION_TYPES } from "./user.types";

const initialState = {
  currentUser: {},
  settings: { darkMode: true, sidebarMini: false, activeColor: "blue" },
  isLinkValid: true,
  isAuthenticated: null,
  loading: true,
  token: localStorage.getItem("token"),
  error: null
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: {
          ...state.currentUser,
          id: payload.id,
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          role: payload.role
        },
        error: null
      };

    case USER_ACTION_TYPES.USER_LOADED_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        error: payload
      };

    case USER_ACTION_TYPES.REGISTER_SUCCESS:
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: payload.jwtToken,
        isAuthenticated: true,
        loading: false,
        error: null
      };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        error: null
      };

    case USER_ACTION_TYPES.REGISTER_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        error: payload
      };

    case USER_ACTION_TYPES.GET_SETTINGS_SUCCESS:
    case USER_ACTION_TYPES.SAVE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: payload,
        error: null
      };

    case USER_ACTION_TYPES.GET_SETTINGS_FAILED:
    case USER_ACTION_TYPES.SAVE_SETTINGS_FAILED:
      return {
        ...state,
        error: payload
      };

    case USER_ACTION_TYPES.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    case USER_ACTION_TYPES.SET_SIDEBAR_COLOR_FAILED:
      return {
        ...state,
        error: payload
      };

    case USER_ACTION_TYPES.SET_SIDEBAR_COLOR_SUCCESS:
      return {
        ...state,
        settings: { ...state.settings, activeColor: payload }
      };

    case USER_ACTION_TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
}

export default userReducer;
