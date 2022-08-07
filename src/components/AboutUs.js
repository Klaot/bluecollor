import Minilogo from '../image/minilogo.png';
import AbouteUs from '../image/aboutas.jpg'


const AboutUs = () => {
    return (
        <section className='container'>
            <div className='about-us'>
                <div className='about-us-img about-us-img-hidden705px'>
                    <img src={AbouteUs} alt='adoutimg'/>
                </div>
                <div className='about-us-info'>
                    <div className='minilogo'>
                        <img src={Minilogo} alt='minilogo'/>
                        <h4>Welcome BlueCollar</h4>
                    </div>
                    <div className='about-us-h1andp'>
                        <h1>We Provide Your Future</h1>
                        <p>Bluecollar Electrical services was established in 2008.
                        We are trusted and reliable electricians who serve customers
                        in the city as well as throughout United States Of America.</p>
                        <p>We have extensive experience of domestic and business
                        electrical installations and no job is too small. Our customers
                        value our professionalism, work ethic and our competitive prices.</p>
                    </div>
                    <div className='our-experience'>
                        <div className='about-us-img about-us-img-show705px'>
                            <img src={AbouteUs} alt='adoutimg'/>
                        </div>
                        <div className='age-all'>
                            <div className='age'>
                                <h2>35</h2>
                                <p>Years Of <br></br>Experience</p>
                            </div>
                            <div className='age-info'>
                                <p>- For all your system requirements</p>
                                <p>- All work undertaken by qualified</p>
                                <p>- Experienced office staff on hand</p>
                                <p>- A Full Guarantee On Workmanship</p>
                                <p>- Properties at a reasonable price</p>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutUs;