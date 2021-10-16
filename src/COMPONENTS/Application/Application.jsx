import React from 'react'
import './Application.css';
import { useState, useEffect } from 'react';
import Search from '../Search/Search'
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForeCastWeather from '../ForecastWeather/Forecast'

import { getCurrentWeather, getForecastWeather, liveLocation } from '../../API/openweathermap'
import GeoLocation from '../../GeoLocation_CustomHook/GeoLocation';

function Application() {
    const [location, setLocation] = useState('');
    const [result, setResult] = useState(null);
    const [forecastdata, setForecastData] = useState([]);
    const coordinates = GeoLocation()

    useEffect(async () => {
        console.log(coordinates.coordinates.lat, coordinates.coordinates.lng)
        const res = await liveLocation(coordinates.coordinates.lat, coordinates.coordinates.lng)
        setResult(res.data);
        console.log("current weather:" + result)
        const forecastResult = await getForecastWeather(coordinates.coordinates.lat, coordinates.coordinates.lng);
        setForecastData(forecastResult.data.hourly)
        console.log("forecast " + forecastdata)

    }, [coordinates])


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await getCurrentWeather(location);
        const lati = response.data.coord.lat;
        const longi = response.data.coord.lon;
        const forecastResult = await getForecastWeather(lati, longi);
        setResult(response.data);
        setForecastData(forecastResult.data.hourly)
        console.log("current weather:" + result);
        console.log("forecast " + forecastdata);
    }



    function handleChange(e) {
        setLocation(e.target.value);
    }
    return (
        <div className="application">
            <Search location={location} handleChange={(e) => handleChange(e)} handleSubmit={(e) => handleSubmit(e)} />
            {result && <CurrentWeather name={result.name}
                temp={result.main.temp}
                feels_like={result.main.feels_like}
                humidity={result.main.humidity}
                temp_max={result.main.temp_max}
                temp_min={result.main.temp_min}
                description={result.weather[0].description}
                icon={result.weather[0].icon}
                pressure={result.main.pressure}
                visibility={result.visibility}
                windspeed={result.wind.speed}
            />}
            {coordinates.loaded ? JSON.stringify(coordinates) : "not"}
            <ForeCastWeather forecast={forecastdata} />
        </div>
    )
}

export default Application;
