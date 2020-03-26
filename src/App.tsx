import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";

import { configureStore, history } from "./store";
import { GlobalStyles } from "./style/globalStyles";
import { Paths } from "src/paths";
import { Login } from "src/pages/Login/Login";
import { Servers } from "src/pages/Servers/Servers";
import { NotFound } from "src/pages/NotFound/NotFound";

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <Route path={Paths.Root} exact component={Login} />
          <Route path={Paths.Servers} exact component={Servers} />
          <Route path={Paths.Any} component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
