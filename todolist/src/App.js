import React from "react";
import "./App.css";
import mainP from "./components/mainP";
import Nav from "./components/nav";
import AboutUs from "./components/about";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={mainP} />
          <Route path="/login" component={LogIn} />
          <Route path="/about" component={AboutUs} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
