import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    let date = '';
    if (selectedDate) {
        date = format(selectedDate, 'PP')
    }

    // Queries
    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

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
                <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate} refetch={refetch}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;