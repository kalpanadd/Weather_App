import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import CurrentWeather from './COMPONENTS/CurrentWeather';

function App() {
  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('delhi');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d360f69d6ce664325674bb8d30e62124`
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        setResult(data)
        console.log(data)
        console.log(result);
      } catch {
        console.log('error');
      }

    };
    fetchData();
  }, [search])

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(location);
    setLocation('');

  }


  return (
    <div className="app">
      <h1>know your Weather</h1>

      <div className="search_div">
        <div className="search_left">
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text"
                className="search_input"
                placeholder="Search for location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
              <button type="submit" className="search_btn"><i className="fas fa-search"></i></button>
            </form>
          </div>
          <div><h3>{location}</h3></div>

        </div>
        <div className="search_right">
          <button className="temp_btn">&#8457;</button>
          <button className="temp_btn">&#8451;</button>
        </div>
      </div>
      {result && <CurrentWeather result={result} />}
    </div>
  )
}

export default App
