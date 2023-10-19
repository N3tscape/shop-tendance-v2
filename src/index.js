import React from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router/router";

import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { getProducts } from "./actions/product.action";

import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getProducts());

const root = document.getElementById("root");
const appRoot = createRoot(root);
appRoot.render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </RouterProvider>
);
