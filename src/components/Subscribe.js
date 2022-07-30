

const Subscribe = () => {
    return (
        <section className='container subscribe'>
            <div className='subscribe-info'>
                <h1>Subscribe Our Newsletter</h1>
                <p>Stay in touch with us to get latest news.
                We are here to fit the needs of your electrical
                services for your dream building.</p>
            </div>
            <div className='subscribe-form-block'>
                <form className='subscribe-form'>
                    <input name='subscribe' type='email' placeholder='Enter your email address'/>
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
    )
};

export default Subscribe;