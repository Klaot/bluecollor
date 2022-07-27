import NoteBook from '../../image/notebook.png';

const MeetUs = () => {
    return (
        <div className='meet-us'>
            <div className='meet-us-minilogo'>
                <img src={NoteBook} alt='NoteBook icon'/>
                <h4>Meet Us</h4>
            </div>
            <h1>Appointment Form</h1>
            <form className='meet-us-form'>
                <input name='name' placeholder='Your name'/>
                <input name='email' placeholder='Your email'/>
                <input name='number' placeholder='Phone Number'/>
                <input name='date'placeholder='Date'/>
                <textarea name='service' placeholder='Service Description'></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default MeetUs;