import React from 'react';
import './CurrentWeather.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function CurrentWeather({ name, feels_like, humidity, temp, temp_max, temp_min, icon, description, pressure, visibility, windspeed, units }) {
    const [modalShow, setModalShow] = React.useState(false);



    let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className='current_weather'>

            <div className='current_details' >
                <Card>
                    <Card.Header><h1>{temp}{units === "metric" ? '℃' : '℉'}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <h4>{name}</h4>
                                <img src={img_url} alt="clouds" />
                            </div>
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {"Feels like: " + feels_like}{units === "metric" ? '℃' : '℉'}
                        </Card.Text>
                        <Card.Text>
                            <div className='current_humidity'>
                                <p>HUMIDITY:{humidity}</p>
                                <p>PRESSURE:{pressure}</p>
                                <p>VISIBILITY:{visibility}</p>
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>
        </div >
    )
}

export default CurrentWeather
