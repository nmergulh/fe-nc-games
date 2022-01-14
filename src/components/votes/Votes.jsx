import React, { useState } from "react";
import { patchVotesByReviewId } from "../../utils/api";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { IconButton } from "@mui/material";

const Votes = ({ review_id, votes }) => {
  let [currentVotes, updateVotes] = useState(votes);
  const [upclicker, setUpClicker] = useState(false);
  const [downclicker, setDownClicker] = useState(false);

  return (
    <div className="review-votes">
      <IconButton
        aria-label="thumbs up"
        className="upvote"
        onClick={() => {
          if (upclicker) {
            setUpClicker(false);
            updateVotes((currentVotes -= 1));
            patchVotesByReviewId(review_id, -1);
          } else {
            setUpClicker(true);
            updateVotes((currentVotes += 1));
            patchVotesByReviewId(review_id, 1);
          }
        }}
      >
        <ThumbUpIcon
          style={
            upclicker
              ? { fill: "green", opacity: "1" }
              : { fill: "green", opacity: "0.7" }
          }
        />
      </IconButton>
      <h4> Vote Count: {currentVotes}</h4>
      <IconButton
        aria-label="thumbs up"
        className="downvote"
        onClick={() => {
          if (downclicker) {
            setDownClicker(false);
            updateVotes((currentVotes += 1));
            patchVotesByReviewId(review_id, 1);
          } else {
            setDownClicker(true);
            updateVotes((currentVotes -= 1));
            patchVotesByReviewId(review_id, -1);
          }
        }}
      >
        <ThumbDownIcon
          style={
            downclicker
              ? { fill: "red", opacity: "1" }
              : { fill: "red", opacity: "0.7" }
          }
        />
      </IconButton>
    </div>
  );
};

export default Votes;
