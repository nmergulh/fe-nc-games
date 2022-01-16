import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";
import "./categories.scss";
import { Link } from "react-router-dom";
import { BackdropUnstyled, CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";

const Categories = () => {
  const [reviewCategories, setReviewCategories] = useState([]);
  const { loading, setIsLoading } = useLoading();

  useEffect(() => {
    getCategories().then((itemsFromApi) => {
      setIsLoading(true);
      setReviewCategories(itemsFromApi);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return loading ? (
    <BackdropUnstyled className="backdrop">
      <CircularProgress color="inherit" className="circleprogress" />
      <p>Loading...</p>
    </BackdropUnstyled>
  ) : (
    <div className="categories">
      <h1>Categories</h1>
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
