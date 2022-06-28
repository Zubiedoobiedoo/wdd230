const numberVisits = document.querySelector("#numbVisits");
const lastVisit = document.querySelector("#lastVisit");
let visits = Number(window.localStorage.getItem("visit-ls"));
if (visits !== 0){
    numberVisits.textContent = visits;
}
else{
    numberVisits.textContent = "This is your first visit"
}
visits++;
localStorage.setItem("visit-ls", visits);
