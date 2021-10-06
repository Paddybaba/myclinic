import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home";
import OPD from "./pages/OPD";
import About from "./pages/About";
import Admin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Statistics from "./pages/Statistics";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/opd" component={OPD} />
        <Route exact path="/about" component={About} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admindashboard" component={AdminDashboard} />
        <Route exact path="/statistics" component={Statistics} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
