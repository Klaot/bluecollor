import NoteBook from '../image/notebook.png';
import Item1 from '../image/Item1.png';
import Item2 from '../image/Item2.png';
import Item3 from '../image/Item3.png';
import Item4 from '../image/Item4.png';
import Item5 from '../image/Item5.png';
import Item6 from '../image/Item6.png';

const OurServices = () => {
    return (
        <section className='container our-services'>
            <div className='our-services-info'>
                <div className='our-services-minilogo'>
                    <img src={NoteBook} alt='NoteBook icon'/>
                    <h4>Area Of Service</h4>
                </div>
                <h1>Our Services</h1>
                <p>We offers a comprehensive range of electrical
                services for domestic and commercial properties 
                at a reasonable price.</p>
            </div>
            <div>
                <div className='our-services-all'>
                    <div className='our-services-item'>
                        <img src={Item1} alt='Item1 icon'/>
                        <h2>Air condition service</h2>
                        <p>Services are able to service your entire 
                        electrical infrastructure from Thermal Imaging
                        of your air condition from switch boards.</p>
                        <a href='#'>View More</a>
                    </div>
                    <div className='our-services-item'>
                        <img src={Item2} alt='Item2 icon'/>
                        <h2>Electrical installation</h2>
                        <p>The art electrical installations that provide
                        all the necessary electrical solutions to suit
                        your business, home or industrial premises.</p>
                        <a href='#'>View More</a>
                    </div>
                    <div className='our-services-item'>
                        <img src={Item3} alt='Item3 icon'/>
                        <h2>General Builder</h2>
                        <p>We provide impeccable safety assessments to both
                        commercial, residential properties. 
                        Our adept & knowledgeable electricians.</p>
                        <a href='#'>View More</a>
                    </div>
                </div>
                <div className='our-services-all'>
                    <div className='our-services-item'>
                        <img src={Item4} alt='Item4 icon'/>
                        <h2>Air condition service</h2>
                        <p>Services are able to service your entire 
                        electrical infrastructure from Thermal Imaging
                        of your air condition from switch boards.</p>
                        <a href='#'>View More</a>
                    </div>
                    <div className='our-services-item'>
                        <img src={Item5} alt='Item5 icon'/>
                        <h2>Electrical installation</h2>
                        <p>The art electrical installations that provide
                        all the necessary electrical solutions to suit
                        your business, home or industrial premises.</p>
                        <a href='#'>View More</a>
                    </div>
                    <div className='our-services-item'>
                        <img src={Item6} alt='Item6 icon'/>
                        <h2>General Builder</h2>
                        <p>We provide impeccable safety assessments to both
                        commercial, residential properties. 
                        Our adept & knowledgeable electricians.</p>
                        <a href='#'>View More</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurServices;