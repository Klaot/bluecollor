import LogoFooter from '../image/logofooter.png';
import MailFooter from '../image/mailfooter.png';
import PhoneFooter from '../image/phonefooter.png';
import GpsFooter from '../image/gpsfooter.png';
import FooterIns from '../image/footerinst.png';
import Footerface from '../image/footerface.png';
import FooterTwit from '../image/footertwit.png';
import FooterPri from '../image/footerpri.png';

const Footer = () => {
    return (
        <section className='container footer'>
            <div className='footer-info-header'>
                <div>
                    <img className='footer-info-header-logofooter' src={LogoFooter} alt='logo'/>
                </div>
                <div className='footer-info-header-blocks'>
                    <img src={MailFooter} alt='MailFooter icon'/>
                    <div>
                        <h3>Mail Us</h3>
                        <p>Info@bluecollar.com</p>
                    </div>
                </div>
                <div className='footer-info-header-blocks'>
                    <img src={PhoneFooter} alt='PhoneFooter icon'/>
                    <div>
                        <h3>Call Us</h3>
                        <p>+01 569 896 654</p>
                    </div>
                </div>
                <div className='footer-info-header-blocks'>
                    <img src={GpsFooter} alt='GpsFooter icon'/>
                    <div>
                        <h3>Location</h3>
                        <p>Amsterdam, 109-74</p>
                    </div>
                </div>
            </div>
            <div className='footer-social-all'>
                <div className='footer-social'>
                    <p>We are here to fit the needs of your basic services
                    for your dream building whether its a commercial, 
                    residential or industry.</p>
                    <div className='footer-social-img'>
                        <img src={FooterIns} alt='FooterIns icon'/>
                        <img src={Footerface} alt='Footerface icon'/>
                        <img src={FooterTwit} alt='FooterTwit icon'/>
                        <img src={FooterPri} alt='FooterPri icon'/>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-link'>
                        <p>Explore</p>
                        <a href='#'>About Us</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>Team</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact Us</a>
                    </div>
                    <div className='footer-link'>
                        <p>Quick Links</p>
                        <a href='#'>Home</a>
                        <a href='#'>Services</a>
                        <a href='#'>Service Single</a>
                        <a href='#'>Projects</a>
                        <a href='#'>Projects Single</a>
                    </div>    
                </div> 
                <div className='footer-link'>
                        <p>Utility Pages</p>
                        <a href='#'>Style Guide</a>
                        <a href='#'>Changelog</a>
                        <a href='#'>Licenses</a>
                        <a href='#'>Protected Page</a>
                        <a href='#'>404 Page</a>
                </div>   
            </div>
            <div></div>
        </section>
    )
};

export default Footer;