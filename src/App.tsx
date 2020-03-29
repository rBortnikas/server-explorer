import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { History } from "history";

import { GlobalStyles } from "./style/globalStyles";
import { Paths } from "src/paths";
import { PrivateRoute } from "src/components/PrivateRoute";
import { Login } from "src/pages/Login";
import { Servers } from "src/pages/Servers/Servers";
import { NotFound } from "src/pages/NotFound/NotFound";

interface Dependencies {
  store: Store;
  history: History;
}

export function App({ store, history }: Dependencies) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path={Paths.Root} exact component={Login} />
          <PrivateRoute path={Paths.Servers} exact component={Servers} />
          <Route path={Paths.Any} component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
