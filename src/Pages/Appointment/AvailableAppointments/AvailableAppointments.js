import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState();

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);

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
                    appointmentOptions.map(appointmentOption => <AppointmentOption key={appointmentOption._id} appointmentOption={appointmentOption} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal treatment={treatment} selectedDate={selectedDate}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;