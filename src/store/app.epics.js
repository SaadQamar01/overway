import { combineEpics } from 'redux-most';
import toastEpics from './toast/toast.epics';
import coreEpics from './core/core.epics';
import authEpics from '../modules/auth/store/auth.epics';

const rootEpic = combineEpics([
  toastEpics,
  coreEpics,
  authEpics,
]);

export default rootEpic;
