import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { persistor, store } from "./store/store.ts";

import "./index.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <ToastContainer position="top-center" autoClose={5000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
