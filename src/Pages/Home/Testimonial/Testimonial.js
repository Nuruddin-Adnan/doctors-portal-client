import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, img, review, location } = testimonial;
    return (
        <div className='card bg-base-100 shadow-xl py-3'>
            <div className="card-body">
                <p className='leading-7'>{review}</p>
                <div className="flex items-center mt-8">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-green ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="user review" />
                        </div>
                    </div>
                    <div>
                        <h4 className='card-title text-dark'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;