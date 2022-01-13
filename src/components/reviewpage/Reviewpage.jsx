import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./reviewpage.scss";
import { getReviewById } from "../../utils/api";
import { useLoading } from "../../hooks/useLoading";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import Singlereviewcard from "../singlereviewcard/Singlereviewcard";

const Reviewpage = () => {
  const [reviewdata, setReviewData] = useState({});
  const { review_id } = useParams();
  const { loading, setIsLoading } = useLoading();

  useEffect(() => {
    getReviewById(review_id).then((itemsFromApi) => {
      setIsLoading(true);
      setReviewData(itemsFromApi);
      setIsLoading(false);
    });
  }, [review_id, setIsLoading]);

  return loading ? (
    <BackdropUnstyled className="backdrop">
      <CircularProgress color="inherit" className="circleprogress" />
      <p>Loading...</p>
    </BackdropUnstyled>
  ) : (
    <section className="review-page">
      <h1>{reviewdata.title}</h1>
      <Singlereviewcard reviewdata={reviewdata} />
    </section>
  );
};

export default Reviewpage;
