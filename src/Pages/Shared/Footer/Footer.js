import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className='py-10' style={{ background: `url(${footer}) no-repeat center center/cover` }}>
            <div className="footer p-10 container">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='#link' className="link link-hover">Emergency Checkup</Link>
                    <Link to='#link' className="link link-hover">Monthly Checkup</Link>
                    <Link to='#link' className="link link-hover">Weekly Checkup</Link>
                    <Link to='#link' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='#link' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='#link' className="link link-hover">Cavity Filling</Link>
                    <Link to='#link' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div className='footer footer-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;