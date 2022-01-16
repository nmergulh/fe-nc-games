export const truncateText = (text, maxLength) => {
  let truncated = text;

  if (truncated.length > maxLength) {
    truncated = truncated.substr(0, maxLength) + "...";
  }
  return truncated;
};
