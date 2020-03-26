import { createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";
export interface ReduxState {
  servers: any[];
}

export const history = createBrowserHistory();

const rootReducer = combineReducers({});

export function configureStore(initialState?: ReduxState) {
  return createStore(rootReducer, initialState);
}
