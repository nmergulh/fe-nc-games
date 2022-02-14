import React, { useState, useContext } from "react";
import { postComment } from "../../utils/api";
import { UserContext } from "../../contexts/userContext";
import { TextField, Button } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "./postcomment.scss";

const Postcomment = ({ userComments, setUserComments, review_id }) => {
  const { currentUser } = useContext(UserContext);
  const [newCommentInput, setNewCommentInput] = useState("");

  function handlePost(event) {
    event.preventDefault();

    postComment(review_id, currentUser.username, newCommentInput).then(
      (postedComment) => {
        setNewCommentInput("");
        setUserComments(() => [postedComment, ...userComments]);
      }
    );
  }
  function handleChange(event) {
    setNewCommentInput(event.target.value);
  }

  return (
    <form onSubmit={handlePost} className="form">
      <div className="post-comment">
        <TextField
          id="outlined-basic"
          label="Write a Comment..."
          variant="outlined"
          value={newCommentInput}
          multiline
          rows={4}
          onChange={handleChange}
          fullWidth
          inputProps={{
            style: { fontSize: 15 },
          }}
          className="comment-textfield"
        />
      </div>
      <div className="post-button">
        <Button
          type="submit"
          key="post-comment"
          variant="contained"
          endIcon={<PostAddIcon />}
        >
          Post Comment
        </Button>
      </div>
    </form>
  );
};

export default Postcomment;
