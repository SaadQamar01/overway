import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import { GET_LANGUAGE, callInProcess1 } from './core.actions';
import { getLanguagesService, } from '../../core/services/core/core.service';



const getLanguagesEpic = $actions =>
  $actions.thru(select(GET_LANGUAGE)).flatMap(action => {
    return most
      .fromPromise(getLanguagesService())
      .flatMap(response => {
        return most.from([
          callInProcess1(false),
        ]);
      })
      .recoverWith(_ => {
        return most.of(callInProcess1(false));
      });
  });



export default combineEpics([
  getLanguagesEpic,
]);
