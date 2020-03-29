import { AnyAction } from "redux";
import { ActionTypes } from "../actions";

const initialState = {
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
