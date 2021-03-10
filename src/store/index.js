import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reactotronConfigure } from '../config/Reactotron';
import rootSagas from './sagas';
import rootReducers from './ducks';

reactotronConfigure();
const sagaMonitor = console.tron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [];
middlewares.push(sagaMiddleware);

const composer = compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer()
);

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSagas);

export default store;
