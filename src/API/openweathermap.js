import axios from "axios";

// console.log(process.env.REACT_APP_API_KEY);
// console.log(process.env.REACT_APP_BASE_URL);
function getCurrentWeather(location, unit) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}}weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`)

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