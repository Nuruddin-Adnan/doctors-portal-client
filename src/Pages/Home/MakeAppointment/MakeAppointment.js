import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section className='my-10 lg:my-32' style={{ background: `url(${appointment}) no-repeat center center/cover` }}>
            <div className="container">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row py-0">
                        <div className='lg:block hidden lg:w-1/2'>
                            <img src={doctor} className="max-w-full xl:mt-[-140px] lg:mt-[-75px]" alt='appointment' />
                        </div>
                        <div className='lg:w-1/2 py-10'>
                            <h4 className='text-xl font-bold text-green'>Appointment</h4>
                            <h1 className="text-4xl font-semibold text-white py-5">Make an appointment Today</h1>
                            <p className="pb-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-gradient">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;