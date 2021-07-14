import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Store } from "./Products/store/store";

ReactDOM.render(
  <Provider store={Store} key="provider">
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();


