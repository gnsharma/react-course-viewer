import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Courses from './Courses';
import Home from './Home';
import NavBar from './NavBar';
import NotFound from './NotFound';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
