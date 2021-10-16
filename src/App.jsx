import React from 'react';
import './App.css';
import { useState } from 'react';

import Search from './COMPONENTS/Search/Search';


import { getCurrentWeather } from './API/openweathermap'
function App() {

  const [location, setLocation] = useState('hyd');
  // const [search, setSearch] = useState('delhi');
  // const [result, setResult] = useState(0);
  // const [lat, setLat] = useState()
  // const [long, setLong] = useState()
  // const [error, setError] = useState('');

  /* useEffect(() => {
     const successCoords = (position) => {
       setLat(position.coords.latitude);
       setLong(position.coords.longitude);
       console.log(lat, long);
     }
 
     const errorCallback = (error) => {
       if (error.code === 1)
         setError(error.message)
 
     }
     if (navigator.geolocation)
       navigator.geolocation.getCurrentPosition(successCoords, errorCallback)
 
   }, [])
 
 
   useEffect(() => {
 
     const getLocation = async () => {
       try {
         const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d360f69d6ce664325674bb8d30e62124&units=metric`
         const res = await fetch(url1);
         const livetemp = await res.json();
         console.log(livetemp);
 
       } catch (err) {
         console.log(err);
       }
     }
     getLocation()
   }, [])*/

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d360f69d6ce664325674bb8d30e62124&units=metric`
  //       const res = await fetch(url);
  //       console.log(res);
  //       const data = await res.json();
  //       setResult(data)
  //       console.log(data)
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }

  //   };
  //   fetchData();
  // }, [search])



  function handleSubmit(e) {
    e.preventDefault();
    getCurrentWeather(location).then((res) => res.data)
      .then((data) => console.log(data))


  }

  function handleChange(e) {
    setLocation(e.target.value);

  }








  return (
    <div className="app">
      <h1>know your Weather</h1>
      <Search location={location} handleChange={(e) => handleChange(e)} handleSubmit={(e) => handleSubmit(e)} />

    </div>
  )
}

export default App
