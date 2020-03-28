import { AnyAction } from "redux";
import { ActionTypes } from "../actions/serversActions";
import { Server } from "../types";

const initialState: Server[] = [];

export function serversReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.SetServers:
      return [...action.servers];
    case ActionTypes.ClearServers:
      return initialState;
    default:
      return state;
  }
}
