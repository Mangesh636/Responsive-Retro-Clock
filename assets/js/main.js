/* =============== Digital Clock =============== */
const hour = document.getElementById("clock-hour");
const minutes = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds");

const analogClock = () => {
  // Creating new date object
  let date = new Date();

  // Getting hours, minutes and seconds
  let hh = (date.getHours() / 12) * 360; // (current time) / 12(hours) * 360(deg circle)
  let mm = (date.getMinutes() / 60) * 360; // (Current minute) / 60(minutes) * 360(deg circle)
  let ss = (date.getSeconds() / 60) * 360; // (Current second) / 60(seconds) * 360(deg circle

  // Adding rotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(analogClock, 1000); // Updates every 1s

/* =============== Digital Clock =============== */
const dateDayWeek = document.getElementById("date-day-week");
const dateMonth = document.getElementById("date-month");
const dateDay = document.getElementById("date-day");
const dateYear = document.getElementById("date-year");
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmPm = document.getElementById("text-ampm");

const digitalClock = () => {
  // Creating new date object
  let date = new Date();

  // Getting week day, month, day, year, hours and minutes
  let dayWeek = date.getDay();
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ampm;

  // Getting days of the week and months
  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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

  // Adding corresponding dates
  dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`;
  dateMonth.innerHTML = `${months[month]}`;
  dateDay.innerHTML = `${day}, `;
  dateYear.innerHTML = year;

  // If hours is greater than 12 (afternoon), we subtract -12, so that it starts at 1 (afternoon)
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  // If hours is 0 (early morning), we add 12
  if (hh === 0) {
    hh = 12;
  }

  //   If hours is less than 10, we add a 0 before the hours
  if (hh < 10) {
    hh = `0${hh}`;
  }

  textHour.innerHTML = `${hh}`;

  // If minutes is less than 10, we add a 0 before the minutes
  if (mm < 10) {
    mm = `0${mm}`;
  }

  textMinutes.innerHTML = mm;

  // Adding AM or PM
  textAmPm.innerHTML = ampm;
};
setInterval(digitalClock, 1000); // Updates every 1s
