import React from "react";
import { Button } from "@mui/material";
import "./reviewcard.scss";
import { Link } from "react-router-dom";

const Reviewcard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`} className="review-card-link">
      <li key={review.review_id} className="review-card">
        <div className="timestamp">
          <p>{review.created_at}</p>
        </div>
        <div className="review-img">
          <img src={review.review_img_url} alt={review.title}></img>
        </div>
        <div className="review-data">
          <h2>{review.title}</h2>
          <div className="review-designer-category">
            <h4>{review.designer}</h4>
            <h4 className="category">Category: {review.category}</h4>
          </div>
          <p>{review.review_body}</p>
        </div>
        <div className="review-votes">
          <h4> Vote Count: {review.votes}</h4>
          <Button className="upvote" variant="outlined">
            Upvote
          </Button>
          <Button className="downvote" variant="outlined">
            Downvote
          </Button>
        </div>
      </li>
    </Link>
  );
};

export default Reviewcard;
