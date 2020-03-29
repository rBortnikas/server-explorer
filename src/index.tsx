import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { store, history } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
