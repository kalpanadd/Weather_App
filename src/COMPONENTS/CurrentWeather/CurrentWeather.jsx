import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({ result }) {
    // console.log(props);
    return (
        <div className='current_weather'>
            <h1>CURRENT WEATHER</h1>
            <span>{result.name}</span>

            <div>
                <h1>{result.main.temp}</h1>
                <p>{result.main.temp_min}</p>
                <p>{result.main.temp_max}</p>

                <h3>Haze</h3>
                <h3>feels like 25</h3>
            </div>
            <div>
                <div>air quality</div>
                <div>wind</div>
                <div>{result.main.feels_like}</div>
                <div>{result.main.humidity}</div>
                <div>{result.main.pressure}</div>

            </div>

        </div>
    )
}

export default CurrentWeather
