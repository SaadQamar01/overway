import { combineReducers } from 'redux';
import coreReducer from './core/core.reducer';
import authReducer from '../modules/auth/store/auth.reducer';

export default combineReducers({
  core: coreReducer,
  auth: authReducer,
});
