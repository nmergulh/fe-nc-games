import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-application.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesAPI.get("/categorie").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sort_by, order) => {
  return gamesAPI
    .get("/reviews", {
      params: {
        category,
        sort_by,
        order,
      },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return gamesAPI.get(`./reviews/${review_id}`).then((res) => {
    return res.data.review;
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

export const patchVotesByReviewId = (review_id = 14, votes) => {
  return gamesAPI
    .patch(`./reviews/${review_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.review;
    })
    .catch((err) => {
      return err;
    });
};
