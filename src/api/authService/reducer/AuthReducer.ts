import { AnyAction } from "redux";
import { ActionTypes } from "../actions";
import { AuthState } from "src/api/authService/types";

const initialState: AuthState = {
  isLoggingIn: false,
  loginError: undefined
};

export function authReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.Login:
      return { ...state, isLoggingIn: true };
    case ActionTypes.LoginSuccess:
      return initialState;
    case ActionTypes.LoginFail:
      return { ...initialState, loginError: action.error };
    case ActionTypes.Logout:
      return initialState;
    default:
      return state;
  }
}
