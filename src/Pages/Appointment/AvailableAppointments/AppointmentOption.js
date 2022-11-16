import React from 'react';

const AppointmentOption = ({ options }) => {
    const { name, slots } = options
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
                    <button className="btn btn-gradient">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;