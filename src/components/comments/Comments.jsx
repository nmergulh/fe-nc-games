import React, { useEffect, useState } from "react";
import "./comments.scss";
import { getCommentsByReviewId } from "../../utils/api";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";
import Commentcard from "../commentcard/Commentcard";

const Comments = ({ review_id }) => {
  const [userComments, setUserComments] = useState([]);
  const { loading, setIsLoading } = useLoading();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((itemsFromApi) => {
      setIsLoading(true);
      setUserComments(itemsFromApi);
      setIsLoading(false);
      console.log(itemsFromApi);
    });
  }, [review_id, setIsLoading]);

  return loading ? (
    <BackdropUnstyled className="backdrop">
      <CircularProgress color="inherit" className="circleprogress" />
      <p>Loading...</p>
    </BackdropUnstyled>
  ) : userComments.length > 1 ? (
    <ul className="reviewlist">
      {userComments.map((comment) => {
        return <Commentcard comment={comment} key={comment.comment_id} />;
      })}
    </ul>
  ) : (
    <h2>No comments</h2>
  );
};

export default Comments;
