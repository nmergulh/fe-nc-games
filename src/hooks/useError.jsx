import { useState } from "react";

export const useError = () => {
  const [isError, setIsError] = useState({});

  return {
    isError,
    setIsError,
  };
};
