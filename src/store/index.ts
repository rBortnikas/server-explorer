import { createStore, combineReducers } from "redux";

export interface ReduxState {
  servers: any[];
}

const rootReducer = combineReducers({});

export function configureStore(initialState?: ReduxState) {
  return createStore(rootReducer, initialState);
}
