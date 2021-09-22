import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router";
import OPD from "./pages/OPD";

function App() {
  return (
    <div className="App">
      <h1>Lets Start</h1>
      <OPD />
    </div>
  );
}

export default App;
