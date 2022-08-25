let weather = {
    "apikey": "3c98967286d967f3f67649ec7defdf19",

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather found!");
                throw new Error("No weather found!"); 
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data) {
        const {name} = data;
        const {description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {temp_min, temp_max} = data.main;
        const {all} = data.clouds;


        document.querySelector(".weather-heading").innerText = "Weather in " + name;
        document.querySelector(".temperature").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " Km/h";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp_min").innerText = "Min Temp: " + temp_min + " °C";
        document.querySelector(".temp_max").innerText = "Max Temp: " + temp_max + " °C";
        document.querySelector(".cloud").innerText = "Cloud: " + all;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function() {
        this.fetchWeather(document.querySelector(".search").value);
    },
};

const btnSearch = document.querySelector(".btn-search");
const searchInfo = document.querySelector(".search");

btnSearch.addEventListener("click", function() {
    weather.search();
});

searchInfo.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        weather.search();
    }    
});

weather.fetchWeather("florida");
