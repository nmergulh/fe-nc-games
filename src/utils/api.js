import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-application.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesAPI.get("/categories").then((res) => {
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
  return gamesAPI.get(`./reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVotesByReviewId = (review_id = 14, votes) => {
  return gamesAPI
    .patch(`./reviews/${review_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.review;
    });
};

export const getUserDetails = (username) => {
  return gamesAPI.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const getUsers = () => {
  return gamesAPI.get(`./users`).then(({ data }) => {
    return data.users;
  });
};

export const postComment = (review_id, username, body) => {
  console.log(review_id, username, body);
  return gamesAPI
    .post(`/reviews/${review_id}/comments`, { author: username, body })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return gamesAPI.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};
