import NoteBook from '../image/notebook.png';
import StayUpdated1 from '../image/stayupdatedimg1.jpg';
import StayUpdated2 from '../image/stayupdatedimg2.jpg';
import ManImg from '../image/man.png';
import Clock from '../image/clock.png';


const StayUpdated = () => {
    return (
        <section className='container stay-updated'>
            <div className='stay-updated-header'>
                <div className='stay-updated-minilogo'>
                    <img src={NoteBook} alt='NoteBook icon'/>
                    <h4>Stay Updated</h4>
                </div>
                <h1>Latest News & Articles</h1>
            </div>
            <div className='stay-updated-cards'>
                <div className='stay-updated-card'>
                    <img className='stay-updated-card-img' src={StayUpdated1} alt='StayUpdated1 img'/>
                    <div className='stay-updated-card-user'>
                        <div className='stay-updated-user-info active-update'>
                            <img src={ManImg} alt='ManImg icon'/>
                            <h5>Alex Louis</h5>
                        </div>
                        <div className='stay-updated-user-info'>
                            <img src={Clock} alt='Clock icon'/>
                            <h5>April 16, 2022</h5>
                        </div>
                    </div>
                    <h2>How Outside Lighting can Transform Your Summer Garden</h2>
                    <p>Capitalize on low-hanging fruit to identify a ballpark value 
                    added matrix economically activity to beta test override the 
                    multiple touchpoints for offshoring the digital divide with DevOps.</p>
                    <a href='#'>View More</a>
                </div>
                <div className='stay-updated-card'>
                    <img className='stay-updated-card-img' src={StayUpdated2} alt='StayUpdated2 img'/>
                    <div className='stay-updated-card-user'>
                        <div className='stay-updated-user-info active-update'>
                            <img src={ManImg} alt='ManImg icon'/>
                            <h5>John Christin</h5>
                        </div>
                        <div className='stay-updated-user-info'>
                            <img src={Clock} alt='Clock icon'/>
                            <h5>April 16, 2022</h5>
                        </div>
                    </div>
                    <h2>Easy Energy Saving Solutions for Industrial Businesses</h2>
                    <p>Strategies on low-hanging fruit to identify a ballpark value
                    added activity matrix economically to beta test override multiple
                    touchpoints for offshoring the digital divide with DevOps.</p>
                    <a href='#'>View More</a>
                </div>
            </div>
        </section>
    )
};

export default StayUpdated;