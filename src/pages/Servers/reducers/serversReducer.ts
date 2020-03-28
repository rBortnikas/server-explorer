import { AnyAction } from "redux";
import { Actions } from "../actions/serversActions";
import { Server } from "../types";

const initialState: Server[] = [];

export function serversReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case Actions.setServers:
      return [...action.servers];
    case Actions.clearServers:
      return initialState;
    default:
      return state;
  }
}
