function formatData(type, value) {
  if (type === "date") {
    const targetDate = new Date(value);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return targetDate.toLocaleDateString("en-US", options);
  }
  if (type === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
}

export default formatData;
