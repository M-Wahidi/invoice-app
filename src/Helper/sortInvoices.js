export default function sortInvoices(data, type = "") {
  let sortedArr = "";
  if (type === "descending") {
    sortedArr = data.sort((a, b) => (b.invoiceDate > a.invoiceDate ? -1 : b.invoiceDate < a.invoiceDate ? 1 : 0));
  }
  if (type === "ascending") {
    sortedArr = data.sort((a, b) => (b.invoiceDate > a.invoiceDate ? 1 : b.invoiceDate < a.invoiceDate ? -1 : 0));
  }
  return sortedArr;
}
