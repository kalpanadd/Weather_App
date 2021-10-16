import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({ name, feels_like, humidity, temp, temp_max, temp_min, icon, description, pressure, visibility, windspeed }) {
    let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className='current_weather'>
            {/* <h3>current weather</h3>

            <div className>
                <h1>{name}</h1>
                <div className="temp_content">
                    <h1>{temp}&#8451;</h1>
                    <h2>{description}</h2>
                    <img src={img_url} alt="clouds" />

                </div>
                <div className="temp_details">
                    <h4>{"Feels like: " + feels_like}&#8451;</h4>
                    <h4>{"Humidity: " + humidity}&#8451;</h4>
                    <h5>{"Min temp: " + temp_min}&#8451;</h5>
                </div> 



        </div>*/}
            <div className='current_details'>
                <h3>CURRENT WEATHER</h3>
                <div className='current_main_content'>
                    <img src={img_url} alt="clouds" />
                    <h1>{temp}&#8451;</h1>
                    <div>
                        <h4>{description}</h4>
                        <h5>{"Feels like: " + feels_like}&#8451;</h5>
                    </div>

                </div>

                <div className='current_high_low'>
                    <p>The High will be {temp_max}&#8451;</p>
                    <p>The low will be {temp_min}&#8451;</p>
                </div>

                <div className='current_humidity'>
                    <p>HUMIDITY:{humidity}</p>
                    <p>PRESSURE:{pressure}</p>
                    <p>VISIBILITY:{visibility}</p>
                </div>

            </div>



        </div >
    )
}

export default CurrentWeather
