import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo192.png';

const Header = () => {
    const menuItem =
        <>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li tabIndex={0} >
                <button>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </button>
                <ul className="p-2 bg-base-100">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </li>
            <li><NavLink to='/item-3'>Item 3</NavLink></li>
        </>

    return (
        <header className='bg-white'>

            <div className="navbar justify-between container">
                <div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 ">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="logo" style={{ maxWidth: '100px' }} />
                    </Link>
                </div>

                <div>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 bg-white">
                            {menuItem}
                        </ul>
                    </div>

                    <div className="divider divider-horizontal my-auto hidden lg:block bg-slate-200 w-px h-10 ml-5 mr-10"></div>

                    <Link to='/login' className="btn">Get started</Link>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="avatar">
                            <div className="w-12 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
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

export default Header;