import { useState } from "react";

export const useError = () => {
  const [isError, setIsError] = useState(false);

  return {
    isError,
    setIsError,
  };
};
