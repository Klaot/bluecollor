import NoteBook from '../image/notebook.png';
import Card1 from '../image/card1.jpg';
import Card2 from '../image/card2.jpg';
import Card3 from '../image/card3.jpg';
import Card4 from '../image/card4.jpg';

const TheGallery = () => {
    return (
        <section className='container gallery'>
            <div className='gallery-block'>
                <div className='gallery-minilogo'>
                    <img src={NoteBook} alt='NoteBook icon'/>
                    <h4>The Gallery</h4>
                </div>
                <h1>Our Recent Projects</h1>
            </div>
            <div className='gallery-cards'>
                <div className='gallery-cards-item'>
                    <img src={Card1} alt='Card1 img'/>
                    <h2>Fiber cable change</h2>
                    <p>Commercial</p>
                </div>
                <div className='gallery-cards-item'>
                    <img src={Card2} alt='Card2 img'/>
                    <h2>Industry machine issue</h2>
                    <p>Industry</p>
                </div>
                <div className='gallery-cards-item'>
                    <img src={Card3} alt='Card3 img'/>
                    <h2>Wheel Alloy Change</h2>
                    <p>Residential</p>
                </div>
                <div className='gallery-cards-item'>
                    <img src={Card4} alt='Card4 img'/>
                    <h2>Roof Cleaning</h2>
                    <p>Commercial</p>
                </div>
            </div>
        </section>
    )
};

export default TheGallery;