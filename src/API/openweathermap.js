import axios from "axios";


function getCurrentWeather(url, location, key, unit) {
    return axios.get(`${url}weather?q=${location}&appid=${key}&units=${unit}`)

}

function getForecastWeather(url, lati, longi, key, unit) {
    return axios.get(`${url}onecall?lat=${lati}&lon=${longi}&exclude={part}&appid=${key}&units=${unit}`)
}

function liveLocation(url, lat, lon, key, unit) {
    return axios.get(`${url}weather?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`)
}

export {
    getCurrentWeather,
    getForecastWeather,
    liveLocation
}