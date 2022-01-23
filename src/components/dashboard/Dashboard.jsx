import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  const { username, setUsername, setCurrentUser, setLoggedIn, loggedIn } =
    useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setUsername("");
    setCurrentUser({});
    setLoggedIn(false);
    navigate(`/`);
  };

  return (
    <div className="dashboard">
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
