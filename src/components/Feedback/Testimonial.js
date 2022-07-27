import NoteBook from '../../image/notebook.png';
import AnyQuestion from './AnyQuestion';
import Carusel from './Carusel';
import MeetUs from './MeetUs';

const Testimonial = () => {
    return (
        <div className='container testimonial'>
            <div className='testimonial-info'>
                <div className='testimonial-minilogo'>
                    <img src={NoteBook} alt='NoteBook icon'/>
                    <h4>Testimonial</h4>
                </div>
                <h1>Customers Says</h1>
                <Carusel/>
                <AnyQuestion/>
            </div>
            <div>
                <MeetUs/>
            </div>

        </div>
    )
};

export default Testimonial;