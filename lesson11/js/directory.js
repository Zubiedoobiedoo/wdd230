let json = require("json/data.json");
console.log(json);
let divElem = document.querySelector(".grid");
async function getCompanies(){
const response = await fetch("json/data.json");
    if (response.ok){
        const data = await response.json();
        console.log(data.companies);
        showcompanies(data.companies);
    }
}
function showcompanies(companies){
    companies.forEach(company => {
        let businessCard = document.createElement("section");
        businessCard.classList.add("business-card");
        let companyLogo = document.createElement("img");
        companyLogo.setAttribute("src", company.logos.small);
        companyLogo.setAttribute("alt", `${company.name}'s logo`);
        let name = document.createElement("h2");
        name.textContent = company.name;
        name.classList.add("company-name");
        let address = document.createElement("p");
        address.textContent = company.address;
        let phone = document.createElement("p");
        phone.textContent = company.phone;
        let email = document.createElement("p");
        email.textContent = company.email;
        let website = document.createElement("a");
        website.href = company.website;
        website.target = "_blank";
        website.innerHTML = `<p>${company.website}</p>`;
        businessCard.appendChild(companyLogo);
        businessCard.appendChild(name);
        businessCard.appendChild(address);
        businessCard.appendChild(phone);
        businessCard.appendChild(email);
        businessCard.appendChild(website);
        divElem.appendChild(businessCard);
    });
}
getCompanies();
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
gridBtn.addEventListener("click", () => {
    divElem.classList.remove("list");
    divElem.classList.add("grid");
});
listBtn.addEventListener("click", () => {
    divElem.classList.remove("grid");
    divElem.classList.add("list");
});