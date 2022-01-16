export const dateTranslater = (obj) => {
  let date = obj.created_at;
  let dateformat = date.slice(0, 10);
  let timeformat = date.slice(11, 16);

  if (
    date.slice(11, 11) === "0" ||
    date.slice(11, 13) === "10" ||
    date.slice(11, 13) === "11"
  ) {
    return `${dateformat} ${timeformat}am`;
  } else {
    return `${dateformat} ${timeformat}pm`;
  }
};
