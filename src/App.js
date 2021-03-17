import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/login">
          <Header />
          <Login/>
         
        </Route>
        <Route path="/admin">
        <Header />
        <h2>admin</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
