import React from 'react';
import Logo from '../image/logo.png';
import Social1 from '../image/social1.png';
import Social2 from '../image/social2.png';
import Social3 from '../image/social3.png';
import Social4 from '../image/social4.png';
import Mail from '../image/mailfooter.png';
import Phone from '../image/phonefooter.png';



const Navigation = () => {
    return (
        <section className='container'>
            <div className='navigation'>
                <div className='social-all'>
                    <div>
                        <h4>Opening Hours: 06:00 to 20:00</h4>
                    </div>
                    <div className='social'>
                        <a href='#'><img src={Social1} alt='facebook'/></a>
                        <a href='#'><img src={Social2} alt='twiter' /></a>
                        <a href='#'><img src={Social3} alt='prister'/></a>
                        <a href='#'><img src={Social4} alt='instagram'/></a>
                    </div>
                </div>

                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    <div className='mail-and-phone'>
                        <div className='mail'>
                            <img src={Mail} alt='mail'/>
                            <div>
                                <h3>Mail Us</h3>
                                <p>Info@bluecollar.com</p>
                            </div>
                        </div>
                        <div className='phone'>
                            <img src={Phone} alt='mail'/> 
                            <div>
                                <h3>Call Us</h3>
                                <p>+01 569 896 654</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='nav-bg'>
                    <nav className='nav'>
                        <div className='nav-link'>
                            <a href='#'>Home</a>
                            <a href='#'>About Us</a>
                            <a href='#'>Pages</a>
                            <a href='#'>Blog</a>
                            <a href='#'>Contact Us</a>
                        </div>
                        <button className='nav-btn'>Have Any Questions?</button>
                    </nav>
                </div> */}
            </div>     
        </section>
    )
};

export default Navigation;