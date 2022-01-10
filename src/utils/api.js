import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-application.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesAPI.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = () => {
  return gamesAPI.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
