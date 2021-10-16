import React from 'react';
import './App.css';
import { useState } from 'react';

import Search from './COMPONENTS/Search/Search';
import CurrentWeather from './COMPONENTS/CurrentWeather/CurrentWeather';
import ForeCastWeather from './COMPONENTS/ForecastWeather/Forecast'

import { getCurrentWeather, getForecastWeather } from './API/openweathermap'
function App() {

  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);
  const [forecastdata, setForecastData] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    const response = await getCurrentWeather(location);
    const lati = response.data.coord.lat;
    const longi = response.data.coord.lon;
    const forecastResult = await getForecastWeather(lati, longi);
    setResult(response.data);
    setForecastData(forecastResult.data.hourly)
    console.log(result);
    console.log(forecastdata);
  }



  function handleChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="app">
      <h1 style={{ color: "white" }}>know your Weather</h1>
      <Search location={location} handleChange={(e) => handleChange(e)} handleSubmit={(e) => handleSubmit(e)} />
      {result && <CurrentWeather name={result.name}
        temp={result.main.temp}
        feels_like={result.main.feels_like}
        humidity={result.main.humidity}
        temp_min={result.main.temp_min}
        description={result.weather[0].description}
        icon={result.weather[0].icon}
      />}

      <ForeCastWeather forecast={forecastdata} />
    </div>
  )
}

export default App
