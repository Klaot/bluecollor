import NoteBook from '../image/notebook.png';
import CheckMarkPrice from '../image/pricecheckmark.png';
import CheckMark from '../image/checkmark.png';

const PricePlan = () => {
    return (
        <section className='container price-plan'>
            <div className='price-plan-header'>
                <div className='price-plan-header-block1'>
                    <div className='price-plan-minilogo'>
                        <img src={NoteBook} alt='NoteBook icon'/>
                        <h4>Price Plan</h4>
                    </div>
                    <h1>Let’s Customize Work With Affordable Price</h1>
                </div>
                <p>This is passionate about delivering growth and the new
                    possibilities in the field of electrical services. 
                    We have extensive experience of domestic and business 
                    electrical installations and no job is too small.</p>
            </div>
            <div className='price-plan-cards'>
                <div className='price-plan-card'>
                    <div className='price'>
                        <div>
                            <h4>Basic Plan</h4>
                            <h2>$ 599.00</h2>
                        </div>
                        <div>
                            <p>Per Visit Charge</p>
                        </div>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Electrical Service</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Distribution Power Systemss</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>High & Medium Voltages</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Industrial Control Systems</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Switch Installation</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Generator Installations</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Innovative Construction</p>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className='price-plan-card'>
                    <div className='price'>
                        <div>
                            <h4>Standard</h4>
                            <h2>$ 699.00</h2>
                        </div>
                        <div>
                            <p>Per Visit Charge</p>
                        </div>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>PLC Controls</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Conveyor systems</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Wiring renovations</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Electric Water Heater Repair</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Service And Panel Upgrades</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Efficient Lighting Solutions</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Site lighting</p>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className='price-plan-card'>
                    <div className='price'>
                        <div>
                            <h4>Professional</h4>
                            <h2>$ 799.00</h2>
                        </div>
                        <div>
                            <p>Per Visit Charge</p>
                        </div>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Cable Tray Installations</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Wiring Upgrades</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Energy Efficient Lighting</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Emergency Generating</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Pools And Hot Tubs</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Air Conditioning Units</p>
                    </div>
                    <div className='price-plan-item'>
                        <img src={CheckMarkPrice} alt='CheckMarkPrice icon'/>
                        <p>Generating Systems</p>
                    </div>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className='price-plan-footer'>
                <div className='price-plan-card-footer'>
                    <img src={CheckMark} alt='CheckMark icon'/>
                    <div>
                        <h4>Affordable Price</h4>
                        <p>We adhere strictly to the current National Electrical Code,
                        and we conduct regular in-house sessions with our technicians
                        to review any code changes and applications.</p>
                    </div> 
                </div>
                <div className='price-plan-card-footer'>
                    <img src={CheckMark} alt='CheckMark icon'/>
                    <div>
                        <h4>Fixed Plan</h4>
                        <p>We understand fully that your time is of extreme value.
                        You will never have to worry about waiting around for 
                        our trained technicians.24/7 Service Providers Affordable Price.</p>
                    </div> 
                </div>
            </div>
        </section>
    )
};

export default PricePlan;