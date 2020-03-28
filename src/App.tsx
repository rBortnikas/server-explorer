import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";

import { store, history } from "./store";
import { GlobalStyles } from "./style/globalStyles";
import { Paths } from "src/paths";
import { PrivateRoute } from "src/components/PrivateRoute";
import { Login } from "src/pages/Login";
import { Servers } from "src/pages/Servers/Servers";
import { NotFound } from "src/pages/NotFound/NotFound";

export function App() {
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
