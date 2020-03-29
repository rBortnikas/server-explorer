import { AnyAction } from "redux";
import { ActionTypes as AT } from "../actions";

const initialState = {
  servers: [],
  isFetching: false,
  fetchError: false
};

export function serversReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case AT.FetchServers:
      return { ...initialState, isFetching: true };
    case AT.FetchServersSuccess:
      return { ...initialState, servers: [...action.servers] };
    case AT.FetchServersFail:
      return { ...initialState, fetchError: true };
    case AT.ClearServers:
      return initialState;
    default:
      return state;
  }
}
