import React from "react";
import { Button } from "@mui/material";
import "./singlereviewcard.scss";
import Comments from "../comments/Comments";
import { TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Votes from "../votes/Votes";

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
    <div className="single-reviewcard">
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
            <Votes votes={reviewdata.votes} />
          </div>
        </div>
        <div className="comments-alert">
          <Comments review_id={reviewdata.review_id} />
        </div>
        <div className="post-comment">
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
        </div>
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
    </div>
  );
};

export default Singlereviewcard;
