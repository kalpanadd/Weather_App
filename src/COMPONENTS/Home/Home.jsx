import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home_bg'>
            <h1>know your whether</h1>
            <Link to='/weather'>
                <button className='home_btn'>ChekIn</button>
            </Link>
        </div>
    )
}

export default Home
