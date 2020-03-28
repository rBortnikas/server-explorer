import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, ActionTypes } from "./actions";
import { Actions as ServerActions } from "src/pages/Servers/actions/serversActions";
import { AuthService } from "./AuthService";
import { history } from "src/store/index";
import { Paths } from "src/paths";
import { ServerService } from "src/api/ServerService";

export function* authSagas() {
  yield takeLatest(ActionTypes.Login, login);
  //   yield takeLatest(ActionTypes.Logout, logout);
}

function* login(action: ReturnType<typeof Actions.login>) {
  try {
    yield call(AuthService.login, action.credentials);
    yield put(Actions.loginSuccess());
    // const token = AuthService.getAuthToken();
    // if (token) {
    //   const servers = yield call(ServerService.fetchServers, token);
    //   yield put(ServerActions.setServers(servers));
    // }
    history.push(Paths.Servers);
  } catch (e) {
    console.log(e);
    yield put(Actions.loginFail());
  }
}
