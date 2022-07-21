import React from "react";
import Gear from '../image/gear.png';

const Header = () => {
    return (
        <header className='container header'>
            <div className='header-info'>
                <div className='gear-and-p'>
                    <img src={Gear} alt='gear'/>
                    <p>Improve Our Customers’ Lives By Providing Effective Solutions.</p>
                </div>
                <h1>A recognized leader in services industry</h1>
                <button className='header-btn'>View Services</button>
            </div>
        </header>  
    )
};

export default Header;
