//get time
const dt = new Date();

//get year
const year = dt.getFullYear();

//DOM
document.querySelector("#year").textContent = year;

//last modified
document.querySelector("#lmod").textContent = document.lastModified;