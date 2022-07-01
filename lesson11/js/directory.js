const requestURL = "https://zubiedoobiedoo.github.io/wdd230/lesson11/json/data.json";
const cards = document.querySelector(".cards");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const business = jsonObject['companies'];
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let name = document.createElement("h1");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let website = document.createElement("a");
    let membership = document.createElement("p");

    img.setAttribute('src', business.logo);
    img.setAttribute('alt', `${business.businessName} Logo`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("bImg");

    name.textContent = business.businessName;
    name.classList.add("bName");
    Addr.textContent = business.address;
    Addr.classList.add("bAddr");
    pNum.textContent = business.phone;
    pNum.classList.add("bNum");
    website.textContent = business.url;
    membership.textContent = business.membershipLevel;

    website.setAttribute('href', `${business.website}`);
    website.classList.add("bWeb");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector(".cards").appendChild(card);
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {

	cards.classList.add("grids");
	cards.classList.remove("lists");
});

listbutton.addEventListener("click", () => {
	cards.classList.add("lists");
	cards.classList.remove("grids");
});