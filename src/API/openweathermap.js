import axios from "axios";

// const API_KEY = d360f69d6ce664325674bb8d30e62124;

function getCurrentWeather(location, unit) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d360f69d6ce664325674bb8d30e62124&units=${unit}`)

}

function getForecastWeather(lati, longi, unit) {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${longi}&exclude={part}&appid=d360f69d6ce664325674bb8d30e62124&units=${unit}`)
}

function liveLocation(lat, lon, unit) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d360f69d6ce664325674bb8d30e62124&units=${unit}`)
}

export {
    getCurrentWeather,
    getForecastWeather,
    liveLocation
}