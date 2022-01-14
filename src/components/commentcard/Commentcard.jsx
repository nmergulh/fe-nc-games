import React from "react";
import "./commentcard.scss";
import Avatar from "@mui/material/Avatar";

const Commentcard = ({ comment }) => {
  const dateTranslater = () => {
    let date = comment.created_at;
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
    <div>
      <li className="single-commentcardwrap">
        <div className="comment-bar">
          <div className="name-picture">
            <Avatar className="avatar">{comment.author}</Avatar>
            <h4>{comment.author}</h4>
          </div>
          <p>{dateTranslater()}</p>
        </div>
        <div className="comment-data">
          <h2>{comment.title}</h2>
          <div className="comment-body">
            <p>{comment.body}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Commentcard;
