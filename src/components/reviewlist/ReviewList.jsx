import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import "./reviewlist.scss";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";
import Reviewcard from "../reviewcard/Reviewcard";

const ReviewList = ({ sort, order }) => {
  const [reviews, setReviewsList] = useState([]);
  const { loading, setIsLoading } = useLoading();

  const { category_name } = useParams();

  useEffect(() => {
    getReviews(category_name, sort, order).then((itemsFromApi) => {
      setIsLoading(true);
      setReviewsList(itemsFromApi);
      setIsLoading(false);
    });
  }, [category_name, setIsLoading, sort, order]);

  return loading ? (
    <BackdropUnstyled className="backdrop">
      <CircularProgress color="inherit" className="circleprogress" />
      <p>Loading...</p>
    </BackdropUnstyled>
  ) : (
    <div className="reviewlist">
      {reviews.map((review) => {
        return <Reviewcard review={review} key={review.review_id} />;
      })}
    </div>
  );
};

export default ReviewList;
