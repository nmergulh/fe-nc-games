import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";
import "./categories.scss";
import { Link } from "react-router-dom";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";
import { useError } from "../../hooks/useError";
import { Errorpage } from "../errorpage/Errorpage";

const Categories = () => {
  const [reviewCategories, setReviewCategories] = useState([]);
  const { loading, setIsLoading } = useLoading();
  const { isError, setError } = useError();

  useEffect(() => {
    getCategories()
      .then((itemsFromApi) => {
        setIsLoading(true);
        setReviewCategories(itemsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [setIsLoading, setError]);

  if (isError) {
    return <Errorpage />;
  } else
    return loading ? (
      <BackdropUnstyled className="backdrop">
        <CircularProgress color="inherit" className="circleprogress" />
        <p>Loading...</p>
      </BackdropUnstyled>
    ) : isError || reviewCategories.length < 1 ? (
      <p></p>
    ) : (
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {reviewCategories.map((category) => {
            return (
              <li key={category.slug}>
                <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Categories;
