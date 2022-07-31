import LogoFooter from '../image/logofooter.png';
import MailFooter from '../image/mailfooter.png';
import PhoneFooter from '../image/phonefooter.png';
import GpsFooter from '../image/gpsfooter.png';

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
            <div></div>
            <div></div>
        </section>
    )
};

export default Footer;