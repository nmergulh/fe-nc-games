import React from "react";
import { Button } from "@mui/material";
import "./singlereviewcard.scss";
import Comments from "../comments/Comments";

const Singlereviewcard = ({ reviewdata }) => {
  return (
    <ul className="single-reviewcard">
      <li className="single-reviewcardwrap">
        <div className="timestamp">
          <p>{reviewdata.created_at}</p>
        </div>
        <div className="review-img">
          <img src={reviewdata.review_img_url} alt={reviewdata.title}></img>
        </div>
        <div className="review-data">
          <div className="review-designer-category">
            <h4>{reviewdata.designer}</h4>
            <h4 className="category">Category: {reviewdata.category}</h4>
          </div>
          <p>{reviewdata.review_body}</p>
        </div>
        <div className="review-votes">
          <h4> Vote Count: {reviewdata.votes}</h4>
          <Button className="upvote" variant="outlined">
            Upvote
          </Button>
          <Button className="downvote" variant="outlined">
            Downvote
          </Button>
        </div>
      </li>
      <Comments review_id={reviewdata.review_id} />
    </ul>
  );
};

export default Singlereviewcard;
