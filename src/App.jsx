import React from 'react';
import './App.css';
import { useState } from 'react';

import Search from './COMPONENTS/Search/Search';


import { getCurrentWeather } from './API/openweathermap'
import CurrentWeather from './COMPONENTS/CurrentWeather/CurrentWeather';
function App() {

  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);

  // const [lat, setLat] = useState()
  // const [long, setLong] = useState()

  function handleSubmit(e) {
    e.preventDefault();
    getCurrentWeather(location).then((res) => {
      setResult(res.data)
      console.log(result)
    });


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
    </div>
  )
}

export default App
