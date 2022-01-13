import React, { useState } from "react";

export const useError = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return {
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
  };
};
