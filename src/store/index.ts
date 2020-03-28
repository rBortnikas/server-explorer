import { createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";

import { serversReducer } from "src/pages/Servers/reducers/serversReducer";
import { authReducer } from "src/api/authService/reducer";
export interface ReduxState {
  servers: any[];
  auth: any;
}

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  servers: serversReducer,
  auth: authReducer
});

export function configureStore(initialState?: ReduxState) {
  return createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
}
