import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonials = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'London'
        },
        {
            _id: 2,
            name: 'Nilson Mendala',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Albert Inestine',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York'
        },
    ]

    return (
        <section className='container lg:pt-0 pt-20 pb-20 lg:pb-32'>
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-green mb-2'>Testimonial</h4>
                    <h5 className='text-4xl text-dark'>What Our Patients Says</h5>
                </div>
                <img className='lg:w-48 w-24' src={quote} alt="quote" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;