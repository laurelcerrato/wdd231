const temp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const mylat = "49.750042270512154";
const mylong = "6.637199289892592";
const myApi = "45de18d04b727c7223d9fb5e769cd624";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylong}&appid=${myApi}`;

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
    temp.innerHTML = ` ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Current weather icon');
    captionDesc.textContent = `${desc}`;
};
apiFetch();
