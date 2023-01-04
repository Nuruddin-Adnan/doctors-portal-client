import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm, { stripePromise } from './CheckoutForm';

const Payment = () => {
    const { price, slot, treatment, appointmentDate } = useLoaderData();
    return (
        <div>
            <h3 className='text-3xl font-medium'>Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong> at <strong>{slot}</strong></p>
            <div className='max-w-sm mt-4 border rounded p-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;