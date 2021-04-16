import { AppThunk } from 'src/redux/store';
import { api } from 'src/api';

import {
  loginStarted,
  loginSucceeded,
  loginFailed,
  setIsLoggedIn,
  logoutSucceeded,
} from './slice';

export const checkIsUserLoggedIn = (): AppThunk => async (dispatch) => {
  dispatch(loginStarted());

  try {
    const token = await api.user.getLoggedInToken();

    if (token) {
      dispatch(setIsLoggedIn(true));
    }
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const loginByFacebook = (): AppThunk => async (dispatch) => {
  dispatch(loginStarted());

  try {
    const userData = await api.user.loginByFacebook();

    dispatch(loginSucceeded(userData));
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const logout = (): AppThunk => async (dispatch) => {
  try {
    await api.user.logout();

    dispatch(logoutSucceeded());
  } catch (error) {
    console.warn(error);
  }
};
