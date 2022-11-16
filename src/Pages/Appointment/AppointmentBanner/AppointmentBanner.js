import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section className="hero py-10 lg:py-32" style={{ background: `url(${bg}) no-repeat center center/cover` }}>
            <div className="hero-content flex-col lg:flex-row-reverse container">
                <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='chair' />
                <div className='lg:w-1/2 '>
                    <DayPicker className='flex justify-center'
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;