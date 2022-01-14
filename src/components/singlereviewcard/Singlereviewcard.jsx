import React from "react";
import { Button } from "@mui/material";
import "./singlereviewcard.scss";
import Comments from "../comments/Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { IconButton, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Singlereviewcard = ({ reviewdata }) => {
  const dateTranslater = () => {
    let date = reviewdata.created_at;
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
    <ul className="single-reviewcard">
      <li className="single-reviewcardwrap">
        <div className="timestamp">
          <p>{dateTranslater()}</p>
        </div>
        <div className="review-img">
          <img src={reviewdata.review_img_url} alt={reviewdata.title}></img>
        </div>
        <div className="review-data">
          <div className="review-designer">
            <h4>{reviewdata.designer}</h4>
          </div>
          <p>{reviewdata.review_body}</p>
        </div>
        <div className="review-likes-category">
          <div className="review-votes">
            <IconButton aria-label="thumbs up" className="upvote">
              <ThumbUpIcon style={{ fill: "green", opacity: "0.7" }} />
            </IconButton>
            <h4> Vote Count: {reviewdata.votes}</h4>
            <IconButton aria-label="thumbs up" className="upvote">
              <ThumbDownIcon style={{ fill: "red", opacity: "0.7" }} />
            </IconButton>
          </div>
        </div>
        <div className="comments-alert">
          <Comments review_id={reviewdata.review_id} />
        </div>
        <TextField
          id="outlined-basic"
          label="Write a Comment..."
          variant="outlined"
          multiline
          rows={4}
          inputProps={{
            style: { fontSize: 15 },
          }}
          className="comment-textfield"
        />
        <div className="post-button">
          <Button
            key="post-comment"
            variant="contained"
            endIcon={<PostAddIcon />}
          >
            Post Comment
          </Button>
        </div>
      </li>
    </ul>
  );
};

export default Singlereviewcard;
