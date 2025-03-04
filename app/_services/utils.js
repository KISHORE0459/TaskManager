export function getCurrentDate() {
  const date = new Date();
  const crrdate =
    String(date.getDate()).padStart(2, 0) +
    "/" +
    String(date.getMonth() + 1).padStart(2, 0) +
    "/" +
    String(date.getFullYear());
  return String(crrdate);
}

export function cmpDates(deadline) {
  const from = getCurrentDate();
  let fromdate = from.slice(0, 2);
  let frommonth = from.slice(3, 5);
  let fromyear = from.slice(6, 10);
  let todate = deadline.slice(0, 2);
  let tomonth = deadline.slice(3, 5);
  let toyear = deadline.slice(6, 10);

  const year = Number(toyear) - Number(fromyear);
  const month = Number(tomonth) - Number(frommonth);
  const oddmonths = Math.floor((month / 2) * 0.5);
  const dates = Number(todate) - Number(fromdate);

  const remaingdates = year * 365 + month * 30 + oddmonths + dates;

  return String(remaingdates);
}

export function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}
