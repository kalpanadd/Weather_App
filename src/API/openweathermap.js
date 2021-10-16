import axios from "axios";

// const API_KEY = d360f69d6ce664325674bb8d30e62124;

function getCurrentWeather(location) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d360f69d6ce664325674bb8d30e62124&units=metric`)

}

function getForecastWeather(lati, longi) {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&exclude={part}&appid=d360f69d6ce664325674bb8d30e62124&units=metric`)
}

function liveLocation(lat, lon) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d360f69d6ce664325674bb8d30e62124&units=metric`)
}

export {
    getCurrentWeather,
    getForecastWeather,
    liveLocation
}