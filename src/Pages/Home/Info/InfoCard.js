import React from 'react';


const InfoCard = ({ info }) => {
    const { name, icon, description, bgClass } = info
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl text-white p-6 ${bgClass}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body items-center text-center lg:text-left lg:items-start">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;