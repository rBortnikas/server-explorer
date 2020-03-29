import { Credentials } from "./types";

export enum ActionTypes {
  Login = "Login",
  LoginSuccess = "Login success",
  LoginFail = "Login fail",
  Logout = "Logout"
}

const login = (credentials: Credentials) => ({
  type: ActionTypes.Login,
  credentials
});

const loginSuccess = () => ({ type: ActionTypes.LoginSuccess });

const loginFail = (error: any) => ({ type: ActionTypes.LoginFail, error });

const logout = () => ({ type: ActionTypes.Logout });

export const Actions = {
  login,
  loginSuccess,
  loginFail,
  logout
};
