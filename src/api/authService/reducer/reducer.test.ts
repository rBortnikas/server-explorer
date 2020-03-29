import { authReducer } from "./AuthReducer";
import { AuthState } from "src/api/authService/types";
import { Actions } from "../actions";
import { FetchErrors } from "src/api/utils";

describe("authService reducer", () => {
  let initialState: AuthState;
  beforeEach(() => {
    initialState = {
      isLoggingIn: false,
      loginError: undefined
    };
  });

  test("should set is loggingIn to true", () => {
    const action = Actions.login({ username: "usr", password: "psw" });
    const expectedState = { ...initialState, isLoggingIn: true };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test("should return initial state on login success", () => {
    const action = Actions.loginSuccess();
    expect(authReducer(initialState, action)).toEqual(initialState);
  });

  test("should set login error on login fail", () => {
    const action = Actions.loginFail(FetchErrors.Unauthorized);
    const expectedState = {
      ...initialState,
      loginError: FetchErrors.Unauthorized
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  test("should set login state to initial on logout", () => {
    const action = Actions.logout();
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});
