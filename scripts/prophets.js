const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('p');
        const placeofBirth = document.createElement('p');
        fullName.innerHTML = `Full Name: ${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 340);
        portrait.setAttribute('height', 340);
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeofBirth);
        card.appendChild(portrait);
        cards.appendChild(card);

        
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
    //console.table(data.prophets);
};

getProphetData();
