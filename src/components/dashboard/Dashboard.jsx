import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  const {
    username,
    setUsername,
    setCurrentUser,
    setLoggedIn,
    loggedIn,
    currentUser,
  } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Welcome {currentUser.name}</h1>
    </div>
  );
};

export default Dashboard;
