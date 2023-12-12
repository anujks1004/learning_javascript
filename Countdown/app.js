const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
const futureDate = new Date(2023, 11, 25, 11, 30, 0);

giveaway.textContent = `Giveaway Ends On ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()}am`;

function getRemainingTime() {
  const today = new Date().getTime();

  const t = futureDate.getTime() - today;

  const oneDay = 24 * 60 * 60 * 1000;

  const oneHour = 60 * 60 * 1000;

  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(val) {
    if (val < 10) return `0${val}`;
    else return val;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this deadline has expired</h4>`;
  }
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
