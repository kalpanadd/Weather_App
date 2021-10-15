import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('Mumbai');

  return (
    <div className="app">
      <h1>know your Weather</h1>

      <div className="search_div">
        <div className="search_left">
          <div>
            <input type="text"
              className="search_input"
              placeholder="Search for location"
              value={location}
              onChange={(e) => setLocation(e.target.value)} />
            <button className="search_btn"><i className="fas fa-search"></i></button>
          </div>
          <div><h3>{location}</h3></div>

        </div>
        <div className="search_right">
          <button className="temp_btn">&#8457;</button>
          <button className="temp_btn">&#8451;</button>
        </div>
      </div>

    </div>
  )
}

export default App
