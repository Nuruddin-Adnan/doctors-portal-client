import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const infos = [
    {
        _id: 1,
        name: 'Opening Hours',
        description: 'Opening at 9.00am to 8pm',
        icon: clock,
        bgClass: 'bg-gradient'
    },
    {
        _id: 2,
        name: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: marker,
        bgClass: 'bg-dark'
    },
    {
        _id: 3,
        name: 'Contact us now',
        description: '+000 123 456789',
        icon: phone,
        bgClass: 'bg-gradient'
    }
]

const InfoCards = () => {
    return (
        <div className='container'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    infos.map(info => <InfoCard key={info._id} info={info}></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;