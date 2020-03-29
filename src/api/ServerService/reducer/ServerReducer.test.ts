import { serversReducer } from "./ServersReducer";
import { ServersState } from "../types";
import { Actions } from "../actions";

describe("servers reducer", () => {
  let initialState: ServersState;
  beforeEach(() => {
    initialState = {
      servers: [],
      isFetching: false,
      fetchError: false
    };
  });

  test("should set isFetching to true", () => {
    const action = Actions.fetchServers();
    const expectedState = { ...initialState, isFetching: true };
    expect(serversReducer(initialState, action)).toEqual(expectedState);
  });

  test("should set servers to state", () => {
    const servers = [
      { name: "a", distance: 1 },
      { name: "b", distance: 2 }
    ];
    const action = Actions.fetchServersSuccess(servers);
    const expectedState = { ...initialState, servers };
    expect(serversReducer(initialState, action)).toEqual(expectedState);
  });

  test("should set fetchError to true", () => {
    const action = Actions.fetchServersFail();
    const expectedState = { ...initialState, fetchError: true };
    expect(serversReducer(initialState, action)).toEqual(expectedState);
  });

  test("should clear servers", () => {
    const action = Actions.clearServers();
    expect(serversReducer(initialState, action)).toEqual(initialState);
  });
});
