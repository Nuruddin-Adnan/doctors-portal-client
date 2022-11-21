import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AiOutlineDashboard, AiOutlineUser } from 'react-icons/ai';

const DashboardLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidenav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F1F5F9] p-5">
                    {/* Dashboard content goes here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidenav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to='/dashboard'> <AiOutlineDashboard></AiOutlineDashboard> Dashboard</Link>
                            <NavLink to='/dashboard/allusers'> <AiOutlineUser></AiOutlineUser> All Users</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;