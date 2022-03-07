// access to all dynamic content in the html
const city = document.querySelector('.city-title');
const userLocation = document.querySelector(' .country')

const temp = document.querySelector('.temperature');

const image = document.querySelector('.forecast-icon');
const title = document.querySelector('.weather-name');
// access to ul content of card
const list = document.querySelectorAll('ul');



const apiKey = 'c5e8bb65cc7a11a8010169c39242ef2e';
const position = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`)
.then(resolve => {
    const weather = resolve.json;
    return resolve.json();
})
.then(data => {
    updateUi(data);
})
.catch(error => {
    console.log(`Can't connect to API because ${error}`);
});

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`)
.then(resolve => {
    return resolve.json();
})
.then(data => {
    listFunc(data);
})
.catch(error => {
    console.log(`Can't connect to openweather's forecast API because ${error}`);
});

    },

    err => {
        console.log("Couldn't access location");
    });
}
position();
function updateUi(test){
    let data = test;
    const temperature = test.main.temp;
    const feelsLike = test.main.feels_like;
    const pressure = test.main.pressure;
    const humidity = test.main.humidity;
    const speed = test.wind.speed;
    const name = test.name;
    const country = test.sys.country;
    const description = test.weather[0].description;
    const currentTemp = test.main.temp;
    const listArray = Array.prototype.slice.call(list);
    const img = data.weather[0].icon;
    
    // making image dynamic
    image.innerHTML =`
    <img src="icons/${img}.png" style="color:white; background-color:white; border-radius:10px;" alt="image showing weather condition">
    `;
    
    temp.innerHTML=`<p>${temperature}<span>&#8457;</span></p>`;
    city.innerHTML = `<h2>${name}</h2>`;
    userLocation.textContent = `${country}`
    title.textContent = description;
    listArray[0].innerHTML = `<li id="li-1" class=" card-text d-flex justify-content-between border border-top-0 border-start-0 border-end-0 border-bottom-white fw-bolder">
    Now <span>${currentTemp}&#8457;</span>
    </li>
    <li id="li-2" class="card-text d-flex justify-content-between border border-top-0 border-start-0 border-end-0 border-bottom-white fw-bolder">
    Feels Like <span>${feelsLike}&#8457;</span>
    </li>
    <li id="li-3" class="card-text d-flex justify-content-between border border-top-0 border-start-0 border-end-0 border-bottom-white fw-bolder">
    Pressure <span>${pressure}</span>
    </li>
    <li id="li-4" class="card-text d-flex justify-content-between border border-top-0 border-start-0 border-end-0 border-bottom-white fw-bolder">
    Humidity <span>${humidity}</span>
    </li>
    <li id="li-5" class="card-text d-flex justify-content-between fw-bolder">
    Wind Speed<span>${speed}</span>
    </li>`;
    }
    //This is the function to ouput the second api to the dom
function listFunc(forecast){
    let data = forecast;
//problem is how to iterate through the forecast to dynamically output the forecast to the dom
    
}