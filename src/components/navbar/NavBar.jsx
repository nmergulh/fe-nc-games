import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <h4>NC House of Games 🎲</h4>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/categories" className="categories-link">
          <CategoryIcon className="categories-icon" />
          <span className="categories-word">Categories</span>
        </Link>
        <Link to="/login" className="users-link">
          <PersonIcon className="person-icon" />
          <span className="user-word">User</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
