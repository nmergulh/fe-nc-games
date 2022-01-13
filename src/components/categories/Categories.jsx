import React, { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  const [reviewCategories, setReviewCategories] = useState([]);

  useEffect(() => {
    getCategories().then((itemsFromApi) => {
      setReviewCategories(itemsFromApi);
    });
  }, []);

  return (
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
