import { places } from "../data/discover.mjs";



function showData(data) {
    data.places.forEach(place => {
        //create card and elements
        const container = document.querySelector("#discover-container");
    let card = document.createElement('section');
    let title = document.createElement('h2');
        let address = document.createElement('address');
        let figure = document.createElement('figure');   
        let picture = document.createElement('img');  
        let figcaption = document.createElement('figcaption');
        let description = document.createElement('p');
        let button = document.createElement('button');
        let infoContainer = document.createElement('div');
        infoContainer.setAttribute('class', 'infoContainer');
        //populate tha card
        title.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        infoContainer.appendChild(address);
        infoContainer.appendChild(description);
        
        picture.setAttribute('src', place.image);
        picture.setAttribute('alt', `Image of ${place.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', 300);
        picture.setAttribute('height', 200);
        figcaption.textContent = `${place.name}`;
        figure.appendChild(picture);
        figure.appendChild(figcaption);
        description.textContent = `${place.description}`;
        button.textContent = "Learn More";
        button.setAttribute('class', 'discoverBtn');

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(infoContainer);
        card.appendChild(button);
        container.appendChild(card);
        console.log(place.name);
    });
    
}
showData(places);

let imagesToLoad = document.querySelectorAll("[data-src]");
const loadImage = (img) => {
    const src = img.getAttribute("data-src");
    img.src = src;
    img.onload = () => {
    img.removeAttribute("data-src");
    };
}
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }else{
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});

//visits

const date_1 = new Date().toDateString();
const date_2 = new Date();

const days = (startDate, endDate) => {
    const difference = endDate.getTime() - startDate.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

let lastvisit = localStorage.getItem("last-visit");

if (!lastvisit) {
    localStorage.setItem('last-visit', new Date().toDateString());
    document.querySelector(".visits").innerHTML = "Welcome, this is your first visit";
} else {
    const lastamount = days(new Date(lastvisit), new Date());
    if (lastamount === 0) {
        document.querySelector(".visits").innerHTML = "Welcome again, Last visited : Today";
    }
    else if (lastamount === 1) {
        document.querySelector(".visits").innerHTML = "Welcome again, Last visited : " + lastamount + " day ago";
    }
    else{
        document.querySelector(".visits").innerHTML = "Welcome again, Last visited : " + lastamount + " days ago";
    }
    localStorage.setItem('last-visit', new Date());
}

