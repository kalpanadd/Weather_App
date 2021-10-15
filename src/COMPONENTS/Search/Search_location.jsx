import React from 'react'
import { useState } from 'react';
import './Search_location.css'

function Search_location() {
    const [search, setSearch] = useState('');
    return (
        <div className='search_div'>
            <div className="left_search_div">
                <input className='search_input'
                    type='search'
                    placeholder='Search for location'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='search_btn'><i class="fas fa-search"></i></button>
                {search}
            </div>


            <div className="right_search_div">
                <button className='temp-btn'>&#x2103;</button>
                <button className='temp-btn'>&#x2109;</button>
            </div>

        </div>
    )
}

export default Search_location;
