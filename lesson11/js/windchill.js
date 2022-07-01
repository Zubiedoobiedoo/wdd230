const temperature = parseInt(document.getElementById("temp").textContent);
const fahrenheit = (temperature * 1.8) + 32;
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
const speedMph = windSpeed * 0.609344;
const windChillElement = document.getElementById("windchill");

const windChill = (fahrenheit, speedMph) =>{
   return (35.74 + (0.6215 * fahrenheit) - (35.75 * (speedMph ** 0.16)) + (0.4275 * (fahrenheit * (speedMph ** 0.16))))};

if (fahrenheit <= 50 && speedMph > 3.0) {
  let windChillCel = (windChill(fahrenheit, speedMph)-32)*0.6;
  windChillElement.textContent = parseInt(windChillCel) + "°F";
  console.log(windChillCel)} 

else {
  windChillElement.textContent = "N/A";
}