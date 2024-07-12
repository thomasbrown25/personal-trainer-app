import { USER_ACTION_TYPES } from 'store/user/user.types';
import { api } from '../../utils/api.utils';

import { ACCOUNTS_ACTION_TYPES } from './accounts.types';

/** Calls the financing-api service to get liabilities from plaid api
 ** GET: "/liabilities"
 * @param reqBody: string: accessToken
 **/
export const getAccountsBalance = () => async (dispatch) => {
  try {
    const response = await api.get('/api/account/balance');

    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNTS_BALANCE_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNTS_BALANCE_FAILED,
      payload: error?.response
    });
  }
};

/** Calls the financing-api service to get liabilities from plaid api
 ** GET: "/liabilities"
 * @param reqBody: string: accessToken
 **/
export const getAccountBalance = (accountId) => async (dispatch) => {
  try {
    const response = await api.get(`/api/account/balance/${accountId}`);

    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNT_BALANCE_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNT_BALANCE_FAILED,
      payload: error?.response
    });
  }
};

/** Calls the financing-api service to get liabilities from plaid api
 ** GET: "/liabilities"
 * @param reqBody: string: accessToken
 **/
export const refreshAccountsBalance = () => async (dispatch) => {
  try {
    const response = await api.get(`/api/account/balance/refresh`);

    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNT_BALANCE_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: ACCOUNTS_ACTION_TYPES.GET_ACCOUNT_BALANCE_FAILED,
      payload: error?.response
    });
  }
};

export const deleteAccount = (accountId) => async (dispatch) => {
  try {
    const response = await api.delete(`/api/account/${accountId}`);

    dispatch({
      type: ACCOUNTS_ACTION_TYPES.DELETE_ACCOUNT_SUCCESS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error, error.message);
    dispatch({
      type: ACCOUNTS_ACTION_TYPES.DELETE_ACCOUNT_FAILED,
      payload: error?.response
    });
  }
};
