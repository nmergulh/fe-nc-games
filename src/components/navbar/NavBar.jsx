import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { UserContext } from "../../contexts/userContext";

const NavBar = () => {
  const { username, setUsername, currentUser, loggedIn } =
    useContext(UserContext);

  return loggedIn ? (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/reviews">
          <h4>NC House of Games 🎲</h4>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/categories" className="categories-link">
          <CategoryIcon className="categories-icon" />
          <span className="categories-word">Categories</span>
        </Link>
        <Link to="/" className="users-link">
          <Avatar src={currentUser.avatar_url} className="person-icon" />
          <span className="user-word">Login</span>
        </Link>
      </div>
    </div>
  ) : (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/reviews">
          <h4>NC House of Games 🎲</h4>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/categories" className="categories-link">
          <CategoryIcon className="categories-icon" />
          <span className="categories-word">Categories</span>
        </Link>
        <Link to="/" className="users-link">
          <AccountCircleIcon className="person-icon" />
          <span className="user-word">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
