import { createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";

import { serversReducer } from "src/pages/Servers/reducers/serversReducer";
export interface ReduxState {
  servers: any[];
}

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  servers: serversReducer
});

export function configureStore(initialState?: ReduxState) {
  return createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
}
