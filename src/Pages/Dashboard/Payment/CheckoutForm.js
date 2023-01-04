import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-sm btn-gradient mt-4' disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;