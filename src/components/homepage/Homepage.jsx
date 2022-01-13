import React from "react";
import ReviewList from "../reviewlist/ReviewList";
import "./homepage.scss";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <ReviewList />
    </div>
  );
};

export default Homepage;
