import React, { useContext } from "react";
import "./commentcard.scss";
import Avatar from "@mui/material/Avatar";
import { dateTranslater } from "../../utils/datetranslator";
import { UserContext } from "../../contexts/userContext";
import Deletecomment from "../deletecomment/Deletecomment";

const Commentcard = ({ comment, userComments, setUserComments }) => {
  const { allUsers, currentUser } = useContext(UserContext);

  let avatarUrl = "";
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username === comment.author) {
      avatarUrl = allUsers[i].avatar_url;
    }
  }

  return (
    <div className="single-commentcardwrap">
      <div className="comment-bar">
        <div className="name-picture">
          <Avatar className="avatar" src={avatarUrl} />
          <h4>{comment.author}</h4>
        </div>
        <p>{dateTranslater(comment)}</p>
      </div>
      <div className="comment-data">
        <h2>{comment.title}</h2>
        <div className="comment-body">
          <p>{comment.body}</p>
        </div>
      </div>
      {currentUser.username === comment.author && (
        <Deletecomment
          comment={comment}
          userComments={userComments}
          setUserComments={setUserComments}
        />
      )}
    </div>
  );
};

export default Commentcard;
