import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { store, history } from "./store";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
