import Avatar from '../../image/avatar.png';
import Quotes from '../../image/quotes.png';
import ArrowL from '../../image/arrowL.png';
import ArrowR from '../../image/arrowR.png';

const Carusel = () => {
    return (
        <div className='carusel'>
            <div className='review-user'>
                <div className='review-info'>
                    <img src={Avatar} alt='avatar icon'/>
                    <div>
                        <h3>Nancy Luther</h3>
                        <p>NewYork</p>
                    </div>
                </div>
                <div>
                    <img src={Quotes} alt='quotes icon'/>
                </div>
            </div>
            <div className='review-user-comment'>
                <p>We have had several good experiences with 
                Blue Collar team. Most recently, they replaced 
                our 20-year-old HVAC system with a new, modern,
                and more efficient system & it worked fine.</p>
            </div>
            <div className='comment-btn'>
                <button><img src={ArrowL} alt='arrow left icon'/></button>
                <button><img src={ArrowR} alt='arrow right icon'/></button>
            </div>
        </div>
    )
};

export default Carusel;