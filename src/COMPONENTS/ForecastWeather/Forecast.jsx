import React from "react";
import './Forecast.css';
import Carousel from 'react-elastic-carousel';

class Forecast extends React.Component {
    breakPoints = [
        { width: 1, itemsToShow: 5 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },

    ]

    render() {
        const items = this.props.forecast.map((f, i) => {
            const image = {
                url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
                alt: `Image of  ${f.weather[0].description}`,
            };
            const feels_like = f.feels_like;
            const description = f.weather[0].description;
            const unixTimestamp = f.dt;
            let hour = new Date(unixTimestamp * 1000).getHours();
            let ampm = 'AM';
            if (hour === 0) hour = 12;
            else if (hour > 12) {
                hour = hour - 12;
                ampm = 'PM';
            }

            return (
                <div className='forecast_div'>
                    <div className='forecast_card'>
                        <img className="forecast-item__img" src={image.url} alt={image.alt} />
                        <p className="forecast-item__time">{hour} {ampm}</p>
                        <p className="forecast-item__temp">
                            {f.temp} <span className="forecast-item__degree">&#8451;</span>
                        </p>
                        <div>
                            <p className="forecast-item__description">{description}</p>
                            <p>FEELS LIKE:{feels_like}&#8451;</p>
                        </div>
                    </div>

                </div>
            );
        });

        return (
            <div className="forecast ">

                {this.props.f && <h3 className="forecast__title">Hourly Forecast</h3>}
                <Carousel breakPoints={this.breakPoints}>
                    {items}
                </Carousel>
            </div>
        );
    }
}

export default Forecast;
