function getTodayDate() {
  let todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = todayDate.getMonth() + 1;
  const day = todayDate.getDate();
  const date = `${year}-${month < 10 && `0${month}`}-${
    day < 10 ? `0${day}` : day
  }`;

  return date;
}

export default getTodayDate;
