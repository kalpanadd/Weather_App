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
    const [units, setUnits] = useState("metric");
    const coordinates = GeoLocation();


    useEffect(async () => {

        if (coordinates.coordinates) {
            console.log(coordinates.coordinates.lat, coordinates.coordinates.lng)
            const res = await liveLocation(process.env.REACT_APP_BASE_URL, coordinates.coordinates.lat, coordinates.coordinates.lng, process.env.REACT_APP_API_KEY, units)
            setResult(res.data);
            console.log("current weather:" + result)
            const forecastResult = await getForecastWeather(process.env.REACT_APP_BASE_URL, coordinates.coordinates.lat, coordinates.coordinates.lng, process.env.REACT_APP_API_KEY, units);
            setForecastData(forecastResult.data.hourly)
            console.log("forecast " + forecastdata)
        }

    }, [coordinates.coordinates, units])


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await getCurrentWeather(process.env.REACT_APP_BASE_URL, location, process.env.REACT_APP_API_KEY, units, units);
        const lati = response.data.coord.lat;
        const longi = response.data.coord.lon;
        const forecastResult = await getForecastWeather(process.env.REACT_APP_BASE_URL, lati, longi, process.env.REACT_APP_API_KEY, units, units);
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
