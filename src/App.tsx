import React from "react";
import { Provider } from "react-redux";

import { configureStore } from "./store";

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div>hi</div>
    </Provider>
  );
}
