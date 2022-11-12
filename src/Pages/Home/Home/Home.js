import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import InfoCards from '../Info/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDentalCare></ExceptionalDentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </main>
    );
};

export default Home;