import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";

import { configureStore, history } from "./store";

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div>hi</div>
        <Switch>
          <Route path="/servers" component={() => <p>servers</p>} />
          <Route path="/login" component={() => <p>login</p>} />
        </Switch>
      </Router>
    </Provider>
  );
}
