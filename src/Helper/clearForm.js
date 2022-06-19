export default function clearForm(data) {
  return data.map((func) => func(""));
}
