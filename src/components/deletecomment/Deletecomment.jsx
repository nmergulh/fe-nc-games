import React from "react";
import { deleteComment } from "../../utils/api";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Deletecomment({ userComments, setUserComments, comment }) {
  const handleDelete = () => {
    console.log(userComments);
    return deleteComment(comment.comment_id).then(() => {
      const filterComments = userComments.filter(
        (com) => com.comment_id !== comment.comment_id
      );
      setUserComments(filterComments);
    });
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Deletecomment;
