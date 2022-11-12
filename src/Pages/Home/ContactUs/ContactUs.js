import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='py-20 lg:py-32' style={{ background: `url(${appointment}) no-repeat center center/cover` }}>
            <div className="container">
                <div className='text-center mb-10'>
                    <h4 className='text-xl font-bold text-green mb-2'>Contact Us</h4>
                    <h5 className='text-white text-4xl'>Stay connected with us</h5>
                </div>
                <form>
                    <div className="max-w-md mx-auto">
                        <input type="email" className='input block w-full mb-5' placeholder='Email Address' />
                        <input type="text" className='input block w-full mb-5' placeholder='Subject' />
                        <textarea name="message" className='textarea block w-full h-32' placeholder='Your message'></textarea>
                    </div>
                    <div className="text-center mt-9">
                        <button className='btn px-8 btn-gradient'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;