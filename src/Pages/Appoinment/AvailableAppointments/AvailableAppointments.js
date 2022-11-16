import React from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div className='container'>
            <p className='text-xl text-green text-center my-10'>Available Appointments on
                {
                    selectedDate &&
                    <strong> {format(selectedDate, 'PP')}</strong>
                }
            </p>
        </div>
    );
};

export default AvailableAppointments;