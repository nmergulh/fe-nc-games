import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import "./reviewlist.scss";
import { BackdropUnstyled, CircularProgress, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import Reviewcard from "../reviewcard/Reviewcard";

const ReviewList = () => {
  const [reviews, setReviewsList] = useState([]);
  const { loading, setIsLoading } = useLoading();

  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then((itemsFromApi) => {
      setIsLoading(true);
      setReviewsList(itemsFromApi);
      setIsLoading(false);
      console.log(reviews);
    });
  }, [category, setIsLoading]);

  return loading ? (
    <BackdropUnstyled className="backdrop">
      <CircularProgress color="inherit" className="circleprogress" />
      <p>Loading...</p>
    </BackdropUnstyled>
  ) : (
    <ul className="reviewlist">
      {reviews.map((review) => {
        return <Reviewcard review={review} key={review.review_id} />;
      })}
    </ul>
  );
};

export default ReviewList;
