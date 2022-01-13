import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-application.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesAPI
    .get("/categories")
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {
      return err;
    });
};

export const getReviews = (category) => {
  console.log(category);
  return gamesAPI
    .get("/reviews", {
      params: {
        category,
      },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return gamesAPI
    .get(`./reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    })
    .catch((err) => {
      return err;
    });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesAPI
    .get(`./reviews/${review_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      return err;
    });
};
