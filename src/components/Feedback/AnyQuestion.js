import NoteBook from '../../image/notebook.png';
import WhitePhone from '../../image/whitePhone.png';

const AnyQuestion = () => {
    return (
        <div className='any-question'>
            <div className='any-question-minilogo'>
                <img src={NoteBook} alt='NoteBook icon'/>
                <h4>Any Question</h4>
            </div>
            <h3>99.9% Customer Satisfaction Based</h3>
            <p>If you have any questions or need help contact
            with our team, or call</p>
            <div className='any-question-number'>
                <img src={WhitePhone} alt='WhitePhone icon' />
                <h2>(003) 123 456 7890</h2>
            </div>
        </div>
    )
};

export default AnyQuestion;