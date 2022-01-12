import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import "./reviewlist.scss";
import { BackdropUnstyled, CircularProgress, Button } from "@mui/material";

const ReviewList = () => {
  const [reviews, setReviewsList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((itemsFromApi) => {
      setReviewsList(itemsFromApi);
      setLoading(false);
    });
  }, []);

  console.log(reviews[0]);

  return loading ? (
    <BackdropUnstyled>
      <CircularProgress color="inherit" />
    </BackdropUnstyled>
  ) : (
    <ul className="reviewlist">
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <div className="timestamp">
              <p>{review.created_at}</p>
            </div>
            <div className="review-img">
              <img src={review.review_img_url} alt={review.title}></img>
            </div>
            <div className="review-data">
              <h2>{review.title}</h2>
              <p>{review.review_body}</p>
            </div>
            <div className="review-votes">
              <h4> Vote Count: {review.votes}</h4>
              <Button className="upvote" variant="contained">
                Upvote
              </Button>
              <Button className="downvote" variant="contained">
                Downvote
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
