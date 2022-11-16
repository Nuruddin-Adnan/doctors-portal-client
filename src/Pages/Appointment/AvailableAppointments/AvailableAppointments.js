import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))

    return (
        <section className='container my-20'>
            <p className='text-xl text-green text-center my-10'>Available Appointments on
                {
                    selectedDate ?
                        <strong> {format(selectedDate, 'PP')} </strong> : <strong> Pleae select a date</strong>
                }
            </p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointmentOptions.map(options => <AppointmentOption key={options._id} options={options}></AppointmentOption>)
                }
            </div>


        </section>
    );
};

export default AvailableAppointments;