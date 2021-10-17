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
    const coordinates = GeoLocation();
    const [units, setUnits] = useState("metric");


    useEffect(async () => {
        if (coordinates.coordinates) {
            console.log(coordinates.coordinates.lat, coordinates.coordinates.lng)
            const res = await liveLocation(coordinates.coordinates.lat, coordinates.coordinates.lng, units)
            setResult(res.data);
            console.log("current weather:" + result)
            const forecastResult = await getForecastWeather(coordinates.coordinates.lat, coordinates.coordinates.lng, units);
            setForecastData(forecastResult.data.hourly)
            console.log("forecast " + forecastdata)
        }

    }, [coordinates, units])


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await getCurrentWeather(location, units);
        const lati = response.data.coord.lat;
        const longi = response.data.coord.lon;
        const forecastResult = await getForecastWeather(lati, longi, units);
        setResult(response.data);
        setForecastData(forecastResult.data.hourly)
        console.log("current weather:" + result);
        console.log("forecast " + forecastdata);
        setLocation("")
    }


    function handleChange(e) {
        setLocation(e.target.value);
    }

    function handleFarah(e) {
        console.log(e);
        if (e.target.id === 'faranheit')
            setUnits('imperial')
        console.log(units)


    }

    function handleCelci(e) {
        if (e.target.id === 'celcius')
            setUnits('metric')
        console.log(units)

        console.log(units)

    }
    return (
        <div className="application">
            <Search location={location}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                handleFarah={(e) => handleFarah(e)}
                handleCelci={(e) => handleCelci(e)}
            />

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
                units={units}
            />}
            {coordinates.loaded ? "" : <h2>Needs to Access your Location</h2>}
            {coordinates.error ? <h3>Denied access for Location</h3> : ""}
            <ForeCastWeather forecast={forecastdata} units={units} />
        </div>
    )
}

export default Application;
