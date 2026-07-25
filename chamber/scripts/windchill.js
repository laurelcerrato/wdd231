let temp = document.querySelector(".temperature");
const speed = document.querySelector(".wind-speed");
let windchill = document.querySelector(".wind-chill");
let celciustofarenh = (temp.innerHTML * 9/5)+ 32;
let mph = speed.innerHTML / 1.609344;
let finalwindchill;
if (celciustofarenh <= 50 && mph > 3.0){
    finalwindchill= 35.75 + (0.6215 * temp.innerHTML) - (35.75*(Math.pow(speed.innerHTML,0.16))) + (0.4275 * temp.innerHTML * (Math.pow(speed.innerHTML, 0.16)));
}else{
    finalwindchill= "N/A";
}
windchill.innerHTML= finalwindchill;


const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');

const url = `http://api.openweathermap.org/data/2.5/weather?lat=15.50417&lon=-88.025&units=metric&appid=45de18d04b727c7223d9fb5e769cd624`;


async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);

    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    speed.innerHTML = weatherData.wind.speed;
    humidity.innerHTML =weatherData.main.humidity;
}