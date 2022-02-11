import React, { useContext } from "react";
import "./reviewcard.scss";
import { Link } from "react-router-dom";
import Votes from "../votes/Votes";
import Avatar from "@mui/material/Avatar";
import { dateTranslater } from "../../utils/datetranslator";
import { truncateText } from "../../utils/truncateText";
import { UserContext } from "../../contexts/userContext";

const Reviewcard = ({ review }) => {
  const { allUsers } = useContext(UserContext);

  let avatarUrl = "";
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username === review.owner) {
      avatarUrl = allUsers[i].avatar_url;
    }
  }

  return (
    <li key={review.review_id} className="review-card">
      <Link to={`/reviews/${review.review_id}`} className="review-card-link">
        <div className="review-bar">
          <div className="name-picture">
            <Avatar className="avatar" alt={review.owner} src={avatarUrl} />
            <h4>{review.owner}</h4>
          </div>
          <p>{dateTranslater(review)}</p>
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
          <p>{truncateText(review.review_body, 120)}</p>
        </div>
      </Link>
      <div className="review-votes">
        <Votes votes={review.votes} />
      </div>
    </li>
  );
};

export default Reviewcard;
