import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const services = [
    {
        _id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        icon: fluoride,
    },
    {
        _id: 2,
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        icon: cavity,
    },
    {
        _id: 3,
        name: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        icon: whitening,
    }
]


const Services = () => {
    return (
        <section className='container py-20 lg:py-32'>
            <div className='text-center'>
                <h4 className='text-xl font-bold text-green mb-2'>OUR SERVICES</h4>
                <h5 className='text-dark text-4xl'>Services We Provide</h5>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;