import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment; //treatment is appointmentOption, just different name
    const { user } = useContext(AuthContext);
    const [bookingError, setbookingError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        if (phone.length === 0) {
            setbookingError('Phone number is required')
        }
        else {
            const booking = {
                appointmentDate: date,
                treatment: treatmentName,
                patient: name,
                slot,
                email,
                phone,
                createdAt: new Date(),
            }



            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setbookingError('')
                        setTreatment(null);
                        toast.success('Booking confirmed');
                        refetch();
                    }
                    else {
                        toast.error(data.message);
                    }
                })

        }
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    {
                        bookingError &&
                        <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{bookingError}</span>
                            </div>
                        </div>
                    }
                    <form onSubmit={handleSubmit} className='grid gap-4 mt-5'>
                        <input type="text" name='date' placeholder="Type here" defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full" disabled />
                        <select className="select select-bordered w-full" name='slot'>
                            {
                                slots.map((slot, index) => <option key={index} defaultValue={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} type="text" placeholder="Full Name" className="input input-bordered w-full" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered w-full" disabled />
                        <button type='submit' className='btn w-full'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;