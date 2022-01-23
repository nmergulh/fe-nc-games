import React, { useContext, useState, useEffect } from "react";
import Reviewquerybar from "../reviewquerybar/Reviewquerybar";
import { UserContext } from "../../contexts/userContext";
import { getUsers } from "../../utils/api";
import "./homepage.scss";

const Homepage = () => {
  const { allUsers, setAllUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((itemsFromApi) => {
      setAllUsers(itemsFromApi);
    });
  }, [setAllUsers]);

  return (
    <div className="homepage">
      <Reviewquerybar />
    </div>
  );
};

export default Homepage;
