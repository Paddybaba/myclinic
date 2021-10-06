import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import PrintPatient from "./components/PrintPatient";
ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <PrintPatient /> */}
  </BrowserRouter>,
  document.getElementById("root")
);
