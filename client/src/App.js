import React from 'react';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Navbar from './components/layout/Navbar';
// import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

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
            </Switch>
        </Container>
    </Router>
  );
}

export default App;
