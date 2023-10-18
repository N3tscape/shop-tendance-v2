import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = document.getElementById("root");
const appRoot = createRoot(root);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
