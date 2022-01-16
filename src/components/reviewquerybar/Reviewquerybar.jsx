import React, { useState } from "react";
import ReviewList from "../reviewlist/Reviewlist";
import "./reviewquerybar.scss";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const Reviewquerybar = () => {
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("created_at");

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="review-querybar">
      <div className="querys">
        <FormControl sx={{ m: 1, width: 150 }}>
          <InputLabel id="sort-reviews-input">Sort Reviews</InputLabel>
          <Select
            labelId="sort-reviews-select"
            id="sort-reviews"
            value={sort}
            onChange={handleSortChange}
            label="sort-reviews-select"
            variant="filled"
          >
            <MenuItem value={"created_at"}>created at</MenuItem>
            <MenuItem value={"comment_count"}>comment count</MenuItem>
            <MenuItem value={"votes"}>votes</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 110 }}>
          <InputLabel id="order-reviews-label">Order By</InputLabel>
          <Select
            labelId="order-reviews"
            id="order-reviews"
            value={order}
            onChange={handleOrderChange}
            label="order-reviews"
            variant="filled"
          >
            <MenuItem value={"asc"}>⬆️ ASC</MenuItem>
            <MenuItem value={"desc"}>⬇️ DESC</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ReviewList order={order} sort={sort} />
    </div>
  );
};

export default Reviewquerybar;
