import React from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>NC House of Games 🎲</h1>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/users">User</Link>
      </div>
    </div>
  );
};

export default NavBar;
