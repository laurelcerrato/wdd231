const temp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherContainer = document.querySelector('.weather');
const mylat = "49.750042270512154";
const mylong = "6.637199289892592";
const myApi = "45de18d04b727c7223d9fb5e769cd624";
const days = 3;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylong}&cnt=${days}&appid=${myApi}`;

async function apiFetch() {
    try { 
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log(error);
    }    
    
}


function displayResults(data) {
    const iconImg = document.createElement("img");
    temp.innerHTML = ` ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    iconImg.setAttribute('src', iconsrc);
    iconImg.setAttribute('alt', 'Current weather icon');
    weatherContainer.appendChild(iconImg);
    captionDesc.textContent = `${desc}`;
};
apiFetch();
