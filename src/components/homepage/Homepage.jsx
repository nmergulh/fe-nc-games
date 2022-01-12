import React from "react";
import ReviewList from "../reviewlist/ReviewList";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <ReviewList />
    </div>
  );
};

export default Homepage;
