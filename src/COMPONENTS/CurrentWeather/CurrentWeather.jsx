import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({ name, feels_like, humidity, temp, temp_max, temp_min, icon, description }) {
    let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className='current_weather'>
            <h3>current weather</h3>

            <div>
                <h1>{name}</h1>
                <div className="temp_content">
                    <h1>{temp}&#8451;</h1>
                    <h2>{description}</h2>
                    <img src={img_url} alt="clouds image" />

                </div>
                <div className="temp_details">
                    <h4>{"Feels like: " + feels_like}&#8451;</h4>
                    <h4>{"Humidity: " + humidity}&#8451;</h4>
                    <h5>{"Min temp: " + temp_min}&#8451;</h5>
                </div>

            </div>

        </div>
    )
}

export default CurrentWeather
