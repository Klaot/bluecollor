import Minilogo from '../image/minilogo.png';
import Comercial from '../image/comercial.png';
import ComercialYellow from '../image/comercialyellow.png';
import ComercialImg from '../image/comercialimg.png';
import Residential from '../image/residential.png';
import Industrial from '../image/industrial.png';


const WhatWeOffer = () => {
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
                    <div >
                        <button className='what-we-offer-Btn' id='active-btn'>
                            <div className='comercial-btn '>
                                <img src={Comercial} alt='Comercial icon'/>
                                <p>Comercial</p>
                            </div> 
                        </button>
                    </div>
                    <div>                          
                        <button>
                            <div className='residential-btn'>
                                <img src={Residential} alt='Residential icon'/>
                                <p>Residential</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button>
                            <div className='industrial-btn'>
                                <img src={Industrial} alt='Industrial icon'/>
                                <p>Industrial</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <ViewComercial/>
        </section>
    )
}

export default WhatWeOffer;

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
            <div>
                <img src={ComercialImg} alt='ComercialImg'/>
            </div>
        </div>
    );
};