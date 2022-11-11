import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItems =
        <>
            <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
            <li><NavLink to='/about' className='rounded-lg'> About </NavLink></li>
            <li><NavLink to='/appointment' className='rounded-lg'> Appointment </NavLink></li>
            <li><NavLink to='/reviews' className='rounded-lg'> Reviews </NavLink></li>
            <li><NavLink to='/contact' className='rounded-lg'> Contact Us </NavLink></li>
        </>

    return (
        <header className='shadow-sm'>
            <div className="navbar justify-between container">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className='text-xl normal-case btn btn-ghost'>
                        Doctors Portal
                    </Link>
                </div>

                <div>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>

                    <div className="divider divider-horizontal my-auto hidden lg:block bg-slate-200 w-px h-10 ml-5 mr-10"></div>

                    <Link to='/login' className="btn btn-gradient mr-4">Login</Link>

                    <div className="dropdown dropdown-end mr-4">
                        <div tabIndex={0} className="avatar">
                            <div className="w-12 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2 cursor-pointer">
                                <img src="https://placeimg.com/192/192/people" alt="avatar" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><button>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;