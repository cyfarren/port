import React from "react";
import ReactDOM from "react-dom";

import App from "port/Port1calc";
import "port/style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
