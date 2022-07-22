import NoteBook from '../image/notebook.png';
import CheckMark from '../image/checkmark.png';

const WhyChooseUs = () => {
    return (
        <section className='container why-choose-us'>
            <div className='why-choose-us-bg'>
                <div className='why-choose-us-table'>
                    <div className='why-choose-us-item'>
                        <p className='why-choose-us-item-p'>3956</p> 
                        <div className='why-choose-us-item-p2'>
                           <p >Project Done</p> 
                        </div>       
                    </div>
                    <div className='why-choose-us-item'>
                        <p className='why-choose-us-item-p'>854</p>
                        <div className='why-choose-us-item-p2'>
                            <p>People Working</p>
                        </div>  
                    </div>
                    <div className='why-choose-us-item'>
                        <p className='why-choose-us-item-p'>265</p>
                        <div className='why-choose-us-item-p2'>
                           <p>Business Partners</p> 
                        </div>  
                    </div>
                    <div className='why-choose-us-item'>
                        <p className='why-choose-us-item-p'>845+</p>
                        <div className='why-choose-us-item-p2'>
                           <p>Happy Customers</p> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className='why-choose-us-info'>
                <div className='why-choose-us-minilogo'>
                    <img src={NoteBook} alt='NoteBook icon'/>
                    <h4>Why Choose Us</h4>
                </div>
                <h1>Few Reasons Why You Should Choose Us</h1>
                <p className='why-choose-us-info-p'>We are offering the following information's
                about us that what we actually do in the electrical sector.
                To Improve our customers’ lives by providing creative and 
                cost-effective solutions to their needs.</p>
                <div className='why-choose-us-info-item'>
                    <img src={CheckMark} alt='CheckMark icon'/>
                    <div>
                        <h4>35 Years Experience</h4>
                        <p>Effective communication is the key to
                        success for any business. From our office staff,
                        to our field.</p>
                    </div>
                </div>
                <div className='why-choose-us-info-item'>
                    <img src={CheckMark} alt='CheckMark icon'/>
                    <div>
                        <h4>Excellence Certificate</h4>
                        <p>We understand fully that your time is of extreme value.
                         We are committed to meeting deadlines.</p>
                    </div>
                </div>
                <div className='why-choose-us-info-item'>
                    <img src={CheckMark} alt='CheckMark icon'/>
                    <div>
                        <h4>Affordable Price</h4>
                        <p>We adhere strictly to the current National Electrical Code,
                        and we conduct regular in-house sessions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;