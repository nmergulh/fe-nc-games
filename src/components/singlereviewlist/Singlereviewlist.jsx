import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlereviewlist.scss";
import { getReviewById } from "../../utils/api";
import { useLoading } from "../../hooks/useLoading";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import Singlereviewcard from "../singlereviewcard/Singlereviewcard";

const Singlereviewlist = () => {
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
    <ul className="single-reviewlist">
      <h1>{reviewdata.title}</h1>
      <Singlereviewcard reviewdata={reviewdata} />
    </ul>
  );
};

export default Singlereviewlist;
