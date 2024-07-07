import React from "react";
import { Provider } from "react-redux";
import mainRouter from "./Router/mainRouter";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={mainRouter} />
    </Provider>
  </React.StrictMode>,
);
