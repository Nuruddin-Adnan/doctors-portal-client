import React from 'react';
import toast from 'react-hot-toast';

const AppointmentOption = ({ appointmentOption, setTreatment, selectedDate }) => {
    const { name, slots } = appointmentOption;
    const handleOpenBookingModal = () => {
        if (!selectedDate) {
            toast.error('Please select a date');
            setTreatment(null)
        } else {
            setTreatment(appointmentOption)
        }
    }
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-green">{name}</h2>
                {
                    slots.length > 0 ?
                        <p>{slots[0]}</p> : 'Please Try another day'
                }
                <p className='text-sm'>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABL</p>
                <div className="card-actions justify-end">
                    {/* The button to open modal */}
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-gradient"
                        onClick={handleOpenBookingModal}
                        disabled={slots.length === 0}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;