import React from 'react';
import './CurrentWeather.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
function CurrentWeather({ name, feels_like, humidity, temp, temp_max, temp_min, icon, description, pressure, visibility, windspeed, units }) {
    const [modalShow, setModalShow] = React.useState(false);



    let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return (
        <div className='current_weather'>
            {/* <div className='current_details'>
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

    </div>*/}
            <div className='current_details' >
                <Card>
                    <Card.Header>{temp}{units === "metric" ? '℃' : '℉'}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <img src={img_url} alt="clouds" />
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
