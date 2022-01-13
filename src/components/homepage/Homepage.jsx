import React from "react";
import ReviewList from "../reviewlist/ReviewList";
import "./homepage.scss";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="homepage">
      <ReviewList />
    </div>
  );
};

export default Homepage;
