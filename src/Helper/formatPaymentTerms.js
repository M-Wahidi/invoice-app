const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatPaymentTerms = (date, days) => {
  const formatedDays = Number(days.split(" ")[1]);
  const fullDate = new Date(date);
  const formatedDate = new Date(
    fullDate.setDate(fullDate.getDate() + formatedDays)
  );

  return `${formatedDate.getDate()} ${
    monthNames[formatedDate.getMonth()]
  } ${formatedDate.getFullYear()}`;
};

export const formatDefaultDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()} ${
    monthNames[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
};
