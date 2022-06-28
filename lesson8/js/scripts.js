const dt = new Date();

const years = dt.getFullYear();

document.querySelector("#year").textContent = years;

document.querySelector("#lmod").textContent = document.lastModified;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthNames = [
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
  "December"
];


const currentDate = new Date();
const dayName = dayNames[currentDate.getDay()];
const monthName = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();
const numberDay = currentDate.getDate();

document.getElementById("current-date").textContent = `${dayName}, ${numberDay} ${monthName}, ${year}`;

let notify = document.querySelector("#notify");
if (dayName.toLowerCase() === "monday" || dayName.toLowerCase() === "tuesday") {
  notify.style.display = "block";
}

function toggleMenu() {
  document.getElementById("secondary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;


const formSubmittedTime = document.getElementById("date-time");
const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", () => {
  formSubmittedTime.innerText = `${currentDate}`;
  console.log(formSubmittedTime.innerText);
});

document.querySelector("#year").textContent = year.toString();

let lastUpdate = document.querySelector("#updated-date");
let lastChangeDate = document.lastModified;
lastUpdate.textContent = `Last Modification: ${lastChangeDate}`;