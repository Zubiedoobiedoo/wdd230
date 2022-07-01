const temp = document.querySelector("#temp");
const description = document.querySelector("#condition");
const wSpeed = document.querySelector("#w-speed");
const iconContainer = document.querySelector("#img-temp");
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=20433a0ed14385201f33d86060fb67bb&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }   
        else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
}

function displayResults(weatherdata){
    temp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
    let desc = weatherdata.weather[0].description;
    wSpeed.textContent = weatherdata.wind.speed;
    let weatherDesc = ``;
    const descArray = desc.split(" ");
    descArray.forEach(word => {
        let newDesc = word.charAt(0).toUpperCase() + word.slice(1);
        weatherDesc += `${newDesc} `;
    });
    description.textContent = weatherDesc;

    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);

    iconContainer.prepend(weatherIcon);
}
apiFetch();