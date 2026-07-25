//spotlight section
const spotlighturl = './data/members.json';

async function getCompaniesData() {
    const response = await fetch(spotlighturl);
    const data = await response.json();
    displaySpotlights(data.companies);
}

async function displaySpotlights(data) {
    const spotlight1 = document.querySelector(".spotlight1");
    const spotlight2 = document.querySelector(".spotlight2");
    const spotlight3 = document.querySelector(".spotlight3");
    const spotlight4 = document.querySelector(".spotlight4");
    const cards = [];

    data.forEach((company) => {
        if (company.status == "Gold" || company.status == "Silver")
        {
            cards.push(company);
        }
    })

    function shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
    }
    shuffleArray(cards);
    //Spotlight 1
    let company1 = cards.pop();
    console.log(company1);
    const card1 = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let email = document.createElement('p');
    let logo = document.createElement('img');
    
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company1.name}`;
    address.textContent = `Address: ${company1.address}`;
    number.textContent = `Phone Number: ${company1.number}`;   
    email.textContent = `Email: ${company1.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company1.img);
    logo.setAttribute('alt', `Logo of ${company1.name}`);
    logo.setAttribute('loading', 'lazy');
    // logo.setAttribute('width', '200');
    // logo.setAttribute('height', '100');

      // Append the section(card) with the created elements
    card1.appendChild(logo);
    card1.appendChild(h2);
    card1.appendChild(address);
    card1.appendChild(number);
    card1.appendChild(email);

    spotlight1.appendChild(card1);


   //Spotlight 2
    let company2 = cards.pop();
    let card2 = document.createElement('section');
    let h22 = document.createElement('h2');
    let address2 = document.createElement('p');
    let number2 = document.createElement('p');
    let email2 = document.createElement('p');
    let logo2 = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
    h22.textContent = `${company2.name}`;
    address2.textContent = `Address: ${company2.address}`;
    number2.textContent = `Phone Number: ${company2.number}`;   
    email2.textContent = `Email: ${company2.email}`; 

        // Build the image portrait by setting all the relevant attribute
    logo2.setAttribute('src', company2.img);
    logo2.setAttribute('alt', `Logo of ${company2.name}`);
    logo2.setAttribute('loading', 'lazy');
    // logo2.setAttribute('width', '200');
    // logo2.setAttribute('height', '100');

     // Append the section(card) with the created elements
    card2.appendChild(logo2);
    card2.appendChild(h22);
    card2.appendChild(address2);
    card2.appendChild(number2);
    card2.appendChild(email2);

    spotlight2.appendChild(card2);

    //Spotlight 1
    let company3 = cards.pop();
    let card3 = document.createElement('section');
    h2 = document.createElement('h2');
    address = document.createElement('p');
    number = document.createElement('p');
    email = document.createElement('p');
    logo = document.createElement('img');
    
      // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${company3.name}`;
    address.textContent = `Address: ${company3.address}`;
    number.textContent = `Phone Number: ${company3.number}`;   
    email.textContent = `Email: ${company3.email}`; 

      // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', company3.img);
    logo.setAttribute('alt', `Logo of ${company3.name}`);
    logo.setAttribute('loading', 'lazy');
    // logo.setAttribute('width', '100');
    // logo.setAttribute('height', '100');

      // Append the section(card) with the created elements
    card3.appendChild(logo);
    card3.appendChild(h2);
    card3.appendChild(address);
    card3.appendChild(number);
    card3.appendChild(email);

    spotlight3.appendChild(card3);

    let company4 = cards.pop();
    let card4 = document.createElement('section');
    let h24 = document.createElement('h2');
    let address4 = document.createElement('p');
    let number4 = document.createElement('p');
    let email4 = document.createElement('p');
    let logo4 = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
    h24.textContent = `${company4.name}`;
    address4.textContent = `Address: ${company4.address}`;
    number4.textContent = `Phone Number: ${company4.number}`;   
    email4.textContent = `Email: ${company4.email}`; 

        // Build the image portrait by setting all the relevant attribute
    logo4.setAttribute('src', company4.img);
    logo4.setAttribute('alt', `Logo of ${company4.name}`);
    logo4.setAttribute('loading', 'lazy');
    // logo2.setAttribute('width', '200');
    // logo2.setAttribute('height', '100');

     // Append the section(card) with the created elements
    card4.appendChild(logo4);
    card4.appendChild(h24);
    card4.appendChild(address4);
    card4.appendChild(number4);
    card4.appendChild(email4);

    spotlight4.appendChild(card4);

}
getCompaniesData();