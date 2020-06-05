import React from "react";
import Container from "react-bootstrap/Container";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import HowItWork from "./components/HowItWork";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Container className="h-100 p-0 main-container" fluid>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/howItWork">
            <HowItWork />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
