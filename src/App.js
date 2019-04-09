import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav nav-justified">
            <NavLink to="/" exact activeStyle={
              { color: 'orange'}
            }> Home </NavLink>
            |
            <NavLink to="/courses" exact activeStyle={
              { color: 'orange'}
            }> Courses </NavLink>
            |
            <NavLink to="/about" exact activeStyle={
              { color: 'orange'}
            }> About </NavLink>
          </nav>

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

function Home() {
  return (
    <div className="card">
      <div className="card-body bg-light">
        <div className="card-title h1">
          Pluralsight Administration
        </div>
        <div className="card-text mb-3">
          React, Redux and React Router for ultra-responsive web apps.
        </div>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <div className="h1">
      Courses
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="h1">
        About
      </div>
      <div>
        This app uses React, Redux, React Router, and many other helpful libraries.
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="h1">
      Ooops! Page not found.
    </div>
  );
}

export default App;
