import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, ActionTypes } from "./actions";
import { AuthService } from "./AuthService";
import { history } from "src/store/index";
import { Paths } from "src/paths";

export function* authSagas() {
  yield takeLatest(ActionTypes.Login, login);
  yield takeLatest(ActionTypes.Logout, logout);
}

function* login(action: ReturnType<typeof Actions.login>) {
  try {
    yield call(AuthService.login, action.credentials);
    yield put(Actions.loginSuccess());
    history.push(Paths.Servers);
  } catch (e) {
    yield put(Actions.loginFail(e));
  }
}

function* logout() {
  yield call(AuthService.logout);
  history.push(Paths.Root);
}
