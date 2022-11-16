import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment; //treatment is appointmentOption, just different name

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;

        console.log(date, slot, name, phoneNumber, email);
    }
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid gap-4 mt-5'>
                        <input type="text" name='date' placeholder="Type here" defaultValue={format(selectedDate, 'PP')} className="input input-bordered w-full" disabled />
                        <select className="select select-bordered w-full" name='slot'>
                            {
                                slots.map((slot, index) => <option key={index} defaultValue={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <button className='btn w-full'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;