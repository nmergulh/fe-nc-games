import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./singlereviewcard.scss";
import Comments from "../comments/Comments";
import { TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Votes from "../votes/Votes";
import Avatar from "@mui/material/Avatar";
import { dateTranslater } from "../../utils/datetranslator";
import { UserContext } from "../../contexts/userContext";

const Singlereviewcard = ({ reviewdata }) => {
  const { allUsers } = useContext(UserContext);

  let avatarUrl = "";
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username === reviewdata.owner) {
      avatarUrl = allUsers[i].avatar_url;
    }
  }

  return (
    <div className="single-reviewcard">
      <li className="single-reviewcardwrap">
        <div className="review-bar">
          <div className="name-picture">
            <Avatar className="avatar" src={avatarUrl} />
            <h4>{reviewdata.owner}</h4>
          </div>
          <p>{dateTranslater(reviewdata)}</p>
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
          <Comments review_id={reviewdata.review_id} reviewdata={reviewdata} />
        </div>
        <div className="post-comment">
          <TextField
            id="outlined-basic"
            label="Write a Comment..."
            variant="outlined"
            multiline
            rows={4}
            fullWidth
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
