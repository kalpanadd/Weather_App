import React from 'react';
import './Search.css';

function Search({ location, handleChange, handleSubmit, handleFarah, handleCelci }) {

    return (
        <div className="search_div">
            <div className="search_left">
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text"
                            className="search_input"
                            placeholder="Search for location"
                            value={location}
                            onChange={(e) => handleChange(e)} />
                        <button type="submit" className="search_btn"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div><h3 style={{ color: 'wheat' }}>{location}</h3></div>


            </div>


            <div className="search_right">
                <button id="faranheit" className="temp_btn" onClick={(e) => handleFarah(e)}>&#8457;</button>
                <button id="celcius" className="temp_btn" onClick={(e) => handleCelci(e)}>&#8451;</button>
            </div>
        </div>
    )
}

export default Search
