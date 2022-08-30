export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credential => ({
  type: LOGIN,
  payload: credential,
});

export const loginSuccess = ({ user, token, device_id }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});
