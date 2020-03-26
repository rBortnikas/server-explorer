import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";

import { configureStore, history } from "./store";
import { Paths } from "./paths";

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div>hi</div>
        <Switch>
          <Route path={Paths.Root} exact component={() => <p>login</p>} />
          <Route path={Paths.Servers} exact component={() => <p>servers</p>} />
          <Route path={Paths.Any} component={() => <p>404</p>} />
        </Switch>
      </Router>
    </Provider>
  );
}
