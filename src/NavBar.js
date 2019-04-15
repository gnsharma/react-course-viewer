import React from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

let NavBar;
export default NavBar = () => (
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
);