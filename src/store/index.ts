import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { fork } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";

import { serversReducer } from "src/pages/Servers/reducers/serversReducer";
import { authReducer } from "src/api/authService/reducer";
import { authSagas } from "src/api/authService/saga";
export interface ReduxState {
  servers: any[];
  auth: any;
}

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  servers: serversReducer,
  auth: authReducer
});

function* rootSaga() {
  yield fork(authSagas);
}

export function configureStore(initialState?: ReduxState) {
  const sagaMiddleware = createSagaMiddleware();

  const devTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  const enhancer = compose(applyMiddleware(sagaMiddleware), devTools);

  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
}
