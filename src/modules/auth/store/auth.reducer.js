import { LOGIN_SUCCESS } from './auth.actions';
import { RESET_REDUCERS } from '../../../store/core/core.actions';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
  token: null,
  systemnotification: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
