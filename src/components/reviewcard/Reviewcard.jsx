import React from "react";
import "./reviewcard.scss";
import { Link } from "react-router-dom";
import Votes from "../votes/Votes";

const Reviewcard = ({ review }) => {
  const dateTranslater = () => {
    let date = review.created_at;
    let dateformat = date.slice(0, 10);
    let timeformat = date.slice(11, 16);

    if (
      date.slice(11, 11) === "0" ||
      date.slice(11, 13) === "10" ||
      date.slice(11, 13) === "11"
    ) {
      return `${dateformat} ${timeformat}am`;
    } else {
      return `${dateformat} ${timeformat}pm`;
    }
  };

  return (
    <li key={review.review_id} className="review-card">
      <Link to={`/reviews/${review.review_id}`} className="review-card-link">
        <div className="timestamp">
          <p>{dateTranslater()}</p>
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
      </Link>
      <div className="review-votes">
        <Votes votes={review.votes} />
      </div>
    </li>
  );
};

export default Reviewcard;
