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

const futureDate = new Date(2023, 11, 25, 11, 30, 0);

giveaway.textContent = `Giveaway Ends On ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()}am`;
