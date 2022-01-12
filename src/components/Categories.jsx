import React, { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

const Categories = () => {
  const [reviewCategories, setReviewCategories] = useState([]);

  useEffect(() => {
    getCategories().then((itemsFromApi) => {
      setReviewCategories(itemsFromApi);
    });
  }, []);

  return (
    <ul>
      {reviewCategories.map((category) => {
        return (
          <li key={category.slug}>
            {console.log(category.slug)}
            {category.slug}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
