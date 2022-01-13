import React, { useState } from "react";

export const useLoading = () => {
  const [loading, setIsLoading] = useState(true);

  return { loading, setIsLoading };
};
