import React from 'react';
import './CurrentWeather.css';
import { Card } from 'react-bootstrap';
function CurrentWeather({ name, feels_like, humidity, temp, temp_max, temp_min, icon, description, pressure, visibility, windspeed, units }) {



    let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className='current_weather'>
            <div className='current_details' >
                <Card>
                    <Card.Header><h3>Current weather:{temp}{units === "metric" ? '℃' : '℉'}</h3></Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <h4>{name}</h4>
                                <img src={img_url} alt="clouds" />
                                {description}

                            </div>
                        </Card.Title>

                        <Card.Text>
                            {"Feels like: " + feels_like}{units === "metric" ? '℃' : '℉'}
                        </Card.Text>
                        <Card.Text>
                            <p>HUMIDITY:{humidity}</p>
                            <p>PRESSURE:{pressure}</p>
                            <p>VISIBILITY:{visibility}</p>
                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>
        </div >
    )
}

export default CurrentWeather
