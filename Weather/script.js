const API_KEY = "30d8b5535689d5ca2cb7df9f0315f7ef";

const input = document.querySelector(".input");
const btn = document.getElementById("searchBtn");

const weatherBox = document.querySelector(".weather");
const errorBox = document.querySelector(".error");
const loader = document.querySelector(".loader");

const img = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

btn.addEventListener("click", () => {
    getWeather(input.value.trim());
});

async function getWeather(city){

    if(!city){
        alert("Please enter city name");
        return;
    }

    try{

        loader.style.display = "block";
        weatherBox.style.display = "none";
        errorBox.style.display = "none";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        if(data.cod !== 200){
            throw new Error("City not found");
        }

        loader.style.display = "none";
        weatherBox.style.display = "flex";

        temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        desc.innerHTML = data.weather[0].description;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        const type = data.weather[0].main;

        if(type === "Clouds") img.src = "cloud.png";
        else if(type === "Clear") img.src = "clear.png";
        else if(type === "Rain") img.src = "rain.png";
        else img.src = "cloud.png";

    }catch(err){
        loader.style.display = "none";
        weatherBox.style.display = "none";
        errorBox.style.display = "block";
        console.log(err);
    }
}