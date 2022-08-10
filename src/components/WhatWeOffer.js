import { useState } from 'react';
import Minilogo from '../image/minilogo.png';
import Comercial from '../image/comercial.png';
import ComercialYellow from '../image/comercialyellow.png';
import ComercialImg from '../image/comercialimg.png';
import Residential from '../image/residential.png';
import Industrial from '../image/industrial.png';


const WhatWeOffer = () => {

    const [activeBtn, setActiveBtn] = useState(1)
    
    let btnActive1 = activeBtn === 1 ? 'active-btn' : '';
    let btnActive2 = activeBtn === 2 ? 'active-btn' : '';
    let btnActive3 = activeBtn === 3 ? 'active-btn' : '';

    return (
        <section className='container what-we-offer'>
            <div className='what-we-offer-info'>
                <div className='what-we-offer-minilogo'>
                    <img src={Minilogo} alt='minilogo'/>
                    <h4>What We Offer</h4>
                </div>
                <h1>Professional Main Services</h1>
                <p>We have extensive experience of domestic and business
                electrical installations and no job is too small. 
                Our customers value our professionalism, work ethic and our
                competitive prices.</p>
            </div>
            <div>
                <div className='what-we-offer-allBtn'>
                    <div>
                        <button className='what-we-offer-Btn' id={btnActive1} onClick={() => setActiveBtn(1)}>
                            <div className='comercial-btn '>
                                <img src={Comercial} alt='Comercial icon'/>
                                <p>Comercial</p>
                            </div> 
                        </button>
                    </div>
                    <div>                          
                        <button id={btnActive2} onClick={() => setActiveBtn(2)}>
                            <div className='residential-btn'>
                                <img src={Residential} alt='Residential icon'/>
                                <p>Residential</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button id={btnActive3} onClick={() => setActiveBtn(3)}>
                            <div className='industrial-btn'>
                                <img src={Industrial} alt='Industrial icon'/>
                                <p>Industrial</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            { activeBtn === 1 ? <ViewComercial/> : null || 
              activeBtn === 2 ? <ViewResidential/> : null ||
              activeBtn === 3 ? <ViewIndustrial/> : null }
        </section>
    )
}

export default WhatWeOffer;

const ViewResidential = () => {
    return (
        <div className='ViewComercial'>
            <div className='ViewComercial-info'>
                <div className='what-we-offer-minilogo'>
                    <img src={ComercialYellow} alt='minilogoYellow'/>
                    <h4>Electrical installation</h4>
                </div>
                <h1>Residential</h1>
                <p>Our professionals can help you solve any problems.
                From replacing sockets to completely replacing 
                all the wires in your home.</p>
                <p>In addition to providing fully qualified, competent
                electricians in and around London, the company also runs
                an electrical wholesale shop.</p>
                <button>Read More</button>
            </div>
            <div className='what-we-offer__viewImg'>
                <img src={ComercialImg} alt='ComercialImg'/>
            </div>
        </div>
    );
};

const ViewComercial = () => {
    return (
        <div className='ViewComercial'>
            <div className='ViewComercial-info'>
                <div className='what-we-offer-minilogo'>
                    <img src={ComercialYellow} alt='minilogoYellow'/>
                    <h4>Electrical installation</h4>
                </div>
                <h1>Commercial</h1>
                <p>Electrical & Maintenance Services Ltd offers a full 
                range of electrical services to suit your needs – from
                moving a light switch to complete house rewires.</p>
                <p>In addition to providing fully qualified, competent
                electricians in and around London, the company also runs
                an electrical wholesale shop.</p>
                <button>Read More</button>
            </div>
            <div className='what-we-offer__viewImg'>
                <img src={ComercialImg} alt='ComercialImg'/>
            </div>
        </div>
    );
};

const ViewIndustrial = () => {
    return (
        <div className='ViewComercial'>
            <div className='ViewComercial-info'>
                <div className='what-we-offer-minilogo'>
                    <img src={ComercialYellow} alt='minilogoYellow'/>
                    <h4>Electrical installation</h4>
                </div>
                <h1>Industrial</h1>
                <p>Let us help your business improve and generate more
                revenue. We will improve your production and set up
                all your equipment..</p>
                <p>In addition to providing fully qualified, competent
                electricians in and around London, the company also runs
                an electrical wholesale shop.</p>
                <button>Read More</button>
            </div>
            <div className='what-we-offer__viewImg'>
                <img src={ComercialImg} alt='ComercialImg'/>
            </div>
        </div>
    );
};