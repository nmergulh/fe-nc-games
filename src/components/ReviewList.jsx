import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const ReviewList = () => {
  const [reviews, SetReviewsList] = useState([]);

  useEffect(() => {
    getReviews().then((itemsFromApi) => {
      SetReviewsList(itemsFromApi);
    });
  }, []);

  console.log(reviews);

  return (
    <ul>
      {reviews.map((review) => {
        <li key={review.review_id}>
          <h2>{review.title}</h2>
          <h2>{review.review_body}</h2>
        </li>;
      })}
    </ul>
  );
};

export default ReviewList;
