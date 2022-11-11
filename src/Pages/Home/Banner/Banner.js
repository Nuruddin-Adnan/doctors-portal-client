import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <section className="hero py-20 lg:py-32" style={{ background: `url(${bg}) no-repeat center center/cover` }}>
            <div className="hero-content flex-col lg:flex-row-reverse container">
                <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <h1 className="lg:text-5xl text-3xl font-bold text-dark">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-gradient">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;