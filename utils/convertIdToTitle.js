export default function convertIdToTitle(str) {
  return str
    .split("-")
    .map((item) => (item ? item[0].toUpperCase() + item.slice(1) : ""))
    .join(" ");
}
