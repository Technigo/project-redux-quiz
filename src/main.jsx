import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { quiz } from "./reducers/quiz";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
