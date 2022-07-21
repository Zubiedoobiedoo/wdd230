var romeRequest = new XMLHttpRequest();
romeRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + 3169070 + '&units=imperial&async=true' + '&APPID=9213dbb5fc5d21e228e8313a14435de1');
romeRequest.onload = function () {

    var data = JSON.parse(romeRequest.responseText);

        var temp = data.main.temp;
        var humid = data.main.humidity;
        function rain(precip){
            if (precip == undefined) {
                precip = 0;
            } else {
                precip = data.rain['3h'];
            }
            return precip;
        }
        var precip = rain();
        var wind = data.wind.speed;
        document.getElementById('current-temp').innerHTML = temp + "&deg;F";
        document.getElementById('current-humidity').innerHTML = humid + "&#37;";
        document.getElementById('current-precipitation').innerHTML = precip + " inches";
        document.getElementById('current-wind').innerHTML = wind + " mph";


        var f = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

        var chill = parseFloat(f).toFixed(2);
        document.getElementById('wind-chill').innerHTML = chill;

        var wImg = document.getElementById('image-import');

        var myImage = document.createElement('img');

        myImage.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
        wImg.appendChild(myImage);
        
        document.getElementById('img-description').innerHTML = "<p>" + data.weather[0].description + "</p>";

        document.getElementById('curDescPort').innerHTML = "<p>" + data.weather[0].description + "</p>";
};

romeRequest.send();