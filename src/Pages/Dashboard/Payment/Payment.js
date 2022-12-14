import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm, { stripePromise } from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    const { price, slot, treatment, appointmentDate } = booking;
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl font-medium'>Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong> at <strong>{slot}</strong></p>
            <div className='max-w-md mt-4 border rounded p-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;