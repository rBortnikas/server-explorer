import { call, put, takeLatest } from "redux-saga/effects";
import { Actions, ActionTypes } from "../actions/serversActions";
import { AuthService } from "src/api/authService/AuthService";
import { ServerService } from "src/api/ServerService";
import { history } from "src/store/index";
import { Paths } from "src/paths";

export function* serverSagas() {
  yield takeLatest(ActionTypes.FetchServers, fetchServers);
}

function* fetchServers() {
  try {
    const token = AuthService.getAuthToken();
    if (token) {
      const servers = yield call(ServerService.fetchServers, token);
      yield put(Actions.fetchServersSuccess(servers));
    } else {
      history.push(Paths.Root);
      yield put(Actions.fetchServersFail());
    }
  } catch (e) {
    yield put(Actions.fetchServersFail());
  }
}
