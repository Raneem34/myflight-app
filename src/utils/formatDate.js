import moment from "moment";

export const formatDate = (dateString) => {
  let date = moment(dateString);
  return date.format("YYYY-MM-DD");
};
