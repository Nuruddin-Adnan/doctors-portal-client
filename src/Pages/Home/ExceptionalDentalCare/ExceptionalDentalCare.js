import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const ExceptionalDentalCare = () => {
    return (
        <section>
            <div className="container">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-1/2'>
                            <img src={treatment} className="md:max-w-sm max-w-full mx-auto rounded-lg shadow-2xl" alt='treatment' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className="lg:text-5xl text-3xl font-bold text-dark">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-gradient">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalDentalCare;