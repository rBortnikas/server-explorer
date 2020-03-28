import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { fork } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";

import { serversReducer } from "src/pages/Servers/reducers/serversReducer";
import { authReducer } from "src/api/authService/reducer";
import { authSagas } from "src/api/authService/saga";
import { serverSagas } from "src/pages/Servers/sagas/serverSaga";
import { AuthState } from "src/api/authService/types";
import { ServersState } from "src/pages/Servers/types";
export interface ReduxState {
  servers: ServersState;
  auth: AuthState;
}

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  servers: serversReducer,
  auth: authReducer
});

function* rootSaga() {
  yield fork(authSagas);
  yield fork(serverSagas);
}

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const devTools =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;

  const enhancer = compose(applyMiddleware(sagaMiddleware), devTools);

  const store = createStore(rootReducer, undefined, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = configureStore();
