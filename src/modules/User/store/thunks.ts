import { AppThunk } from 'src/redux/store';
import { api } from 'src/api';

import { loginStarted, loginSucceeded, loginFailed } from './slice';

export const loginByFacebook = (): AppThunk => async (dispatch) => {
  dispatch(loginStarted());

  try {
    const { data, token } = await api.players.loginByFacebook();

    dispatch(loginSucceeded({ data, token }));
  } catch (error) {
    dispatch(loginFailed());
  }
};
