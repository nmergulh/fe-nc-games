import React from "react";
import "./commentcard.scss";
import Avatar from "@mui/material/Avatar";
import { dateTranslater } from "../../utils/datetranslator";

const Commentcard = ({ comment }) => {
  return (
    <div className="single-commentcardwrap">
      <div className="comment-bar">
        <div className="name-picture">
          <Avatar className="avatar">{comment.author}</Avatar>
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
    </div>
  );
};

export default Commentcard;
