import React from 'react';
import NavigationContainer from './navigation/NavigationContainer';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-most';
import appReducer from './store/app.reducer';
import appEpic from './store/app.epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(appEpic);
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  )
}

export default App; 