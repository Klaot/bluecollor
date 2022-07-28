import NoteBook from '../image/notebook.png';
import Client1 from '../image/client1.png'
import Client2 from '../image/client2.png'
import Client3 from '../image/client3.png'
import Client4 from '../image/client4.png'

const Clients = () => {
    return (
        <div className='container clients'> 
            <div className='clients-minilogo'>
                <img src={NoteBook} alt='NoteBook icon'/>
                <h4>Clients</h4>
            </div>
            <h1>Our Trusted Big Clients!</h1>
            <div className='clients-img'>
                <img src={Client1} alt='Client1 icon'/>
                <img src={Client2} alt='Client2 icon'/>
                <img src={Client3} alt='Client3 icon'/>
                <img src={Client4} alt='Client4 icon'/>
            </div>
        </div>

    )
};

export default Clients;