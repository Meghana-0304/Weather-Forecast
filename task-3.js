const userLocation = document.getElementById("userLocation")
const converter = document.getElementById("converter")
const weatherIcon = document.querySelector(".weatherIcon")
const temparature = document.querySelector(".temparature")
const feelslike = document.querySelector(".feelslike")
const discription = document.querySelector(".discription")
const date = document.querySelector(".date")
const city = document.querySelector(".city")

const Hvalue = document.getElementById("Hvalue")
const Wvalue = document.getElementById("Wvalue")
const SRvalue = document.getElementById("SRvalue")
const SSvalue = document.getElementById("SSvalue")
const Cvalue = document.getElementById("Cvalue")
const UVvalue = document.getElementById("UVvalue")
const Pvalue = document.getElementById("Pvalue")

const forecast = document.querySelector(".forecast")

WEATHER_API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?appid=8e8efe9e95e97ba21bda7b5958240579&q=";
WEATHER_DATA_ENDPOINT = "https://api.openweathermap.org/data/2.5/onecall?appid=8e8efe9e95e97ba21bda7b5958240579&eclude=miutely&units=metric&";

function findUserLocation() {
    fetch(WEATHER_API_ENDPOINT + userLocation.value)
    .then((response) => response.json())
    .then((data) => {
        if(data.cod!= '' && data.cod!=200){
            alert(data.message);
            return;
        }
        console.log(data);

        city.innerHTML=data.name + ", "+data.sys.country;
        weatherIcon.style.background='url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)'
        fetch(
            WEATHER_DATA_ENDPOINT + 'lon=${data.coord.lom}&lat=${data.coord.lat}'
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            temparature.innerHTML = data.current.temp;
            feelslike.innerHTML = "Feels like"+data.current.feels_like;
            discription.innerHTML='<i class="fa-gands fa-cloudversify"></i> &nbsp:'+data.current.weather[0].discription;
        });
    });
}
