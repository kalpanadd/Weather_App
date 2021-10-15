import { useState } from 'react';
import './App.css';
import Search_location from './COMPONENTS/Search/Search_location'
import Current_Weather from './COMPONENTS/Current_weather/Current_Weather';

function App() {

  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('');

  const fetchdata = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=d360f69d6ce664325674bb8d30e62124`
    const res = await fetch(url)
    const response = await res.json();
    console.log(response)
  }
  fetchdata()


  return (
    <div className="app">
      <Search_location />
      <Current_Weather />
    </div >
  );
}

export default App;
