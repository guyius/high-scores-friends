import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import searchRootSaga from "./search/saga";
import playerRootSaga from "./player/saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const preloadedState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : {};
delete window.__INITIAL_STATE__;

export const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(searchRootSaga);
sagaMiddleware.run(playerRootSaga);
