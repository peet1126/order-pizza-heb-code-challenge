import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slices/index";

const store = configureStore({
  reducer,
});

if (module.hot) {
  module.hot.accept("./slices/index", () => {
    const reducers = require("./slices/index").default;

    store.replaceReducers(reducers);
  });
}

export default store;
