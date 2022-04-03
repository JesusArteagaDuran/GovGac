/* eslint-disable import/no-cycle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import AllSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(AllSagas);

export default store;
