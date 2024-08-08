import { api } from "../../utils/api.utils";

import { USER_ACTION_TYPES } from "./user.types";

/** Calls the API service to register a user and returns a jwt token
 ** POST: "/user/register"
 * @param reqBody: { username, email, password }
 **/
export const register = (reqBody) => async (dispatch) => {
  try {
    const response = await api.post("/api/user/register", reqBody);

    if (
      response?.data?.message?.includes(
        "A user with that email address already exists"
      )
    ) {
      dispatch({
        type: USER_ACTION_TYPES.REGISTER_FAILED,
        payload: response.data
      });
      return;
    }

    dispatch({
      type: USER_ACTION_TYPES.REGISTER_SUCCESS,
      payload: response.data.data
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error, error.message);
    let payload;

    if (error.response?.data?.message) {
      payload = error.response.data.message;
    } else {
      payload = error.message;
    }

    dispatch({
      type: USER_ACTION_TYPES.REGISTER_FAILED,
      payload: payload
    });
  }
};

/** Calls the API service to login a user and returns a user object
 ** POST: "/api/user/login"
 * @param reqBody: { email, password }
 **/
export const login = (reqBody) => async (dispatch) => {
  try {
    const response = await api.post("/api/user/login", reqBody);

    dispatch({
      type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
      payload: response.data.data
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error, error.message);

    let payload;

    if (error.response?.data?.message) {
      payload = error.response.data.message;
    } else {
      payload =
        "Sorry we ran into an issue. Please contact support for assistance.";
    }

    dispatch({
      type: USER_ACTION_TYPES.SIGN_IN_FAILED,
      payload: payload
    });
  }
};

/** Clears the login error from the state
 ** POST: "/api/user/login"
 * @param reqBody: { email, password }
 **/
export const clearLoginError = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_ACTION_TYPES.CLEAR_ERROR
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: USER_ACTION_TYPES.CLEAR_ERROR_FAILED,
      payload: error
    });
  }
};

/** Calls the API service to get user data and load user
 ** GET: "/api/user/load-user"
 * @param reqBody: {  }
 **/
export const loadUser = () => async (dispatch) => {
  try {
    const response = await api.get("/api/user/load-user");

    // console.log(response.data.data);

    console.log("calling load user");

    dispatch({
      type: USER_ACTION_TYPES.USER_LOADED,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
  }
};

/** Logs out the user by removing the jwt token in local storage
 * @param reqBody: {  }
 **/
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
    });

    dispatch({ type: USER_ACTION_TYPES.RESET_STATE });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: USER_ACTION_TYPES.SIGN_OUT_FAILED
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  try {
    const response = await api.delete("/api/user/user");

    dispatch({
      type: USER_ACTION_TYPES.DELETE_ACCOUNT_SUCCESS,
      payload: response.data.data
    });

    localStorage.removeItem("token");
    dispatch({
      type: USER_ACTION_TYPES.SIGN_OUT
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: USER_ACTION_TYPES.DELETE_ACCOUNT_FAILED,
      payload: error
    });
  }
};

/**
 ** GET: "/api/usersetting"
 * @param reqBody: null
 **/
export const getSettings = () => async (dispatch) => {
  try {
    const response = await api.get("/api/user/settings");

    console.log(response.data);

    dispatch({
      type: USER_ACTION_TYPES.GET_SETTINGS_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: USER_ACTION_TYPES.GET_SETTINGS_FAILED,
      payload: error?.response
    });
  }
};

export const saveSettings = (newSettings) => async (dispatch) => {
  try {
    const response = await api.post("/api/user/settings", newSettings);

    dispatch({
      type: USER_ACTION_TYPES.SAVE_SETTINGS_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: USER_ACTION_TYPES.SAVE_SETTINGS_FAILED,
      payload: error?.response
    });
  }
};

/** Calls personal-trainer-api to save sidebar color
 ** POST: "/api/user/settings
 * @param color: string
 **/
