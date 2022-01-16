import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import "./errorpage.scss";

export const Errorpage = ({ message }) => {
  console.log(Object.keys(message));
  return (
    <div className="error-page">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Page Error <strong>Please Return to the last Page</strong>
      </Alert>
    </div>
  );
};
