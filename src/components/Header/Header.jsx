import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-10'>
            <div className="navbar w-[80%] mx-auto">
                <div className="navbar-start">
                    <h2 className="normal-case flex text-4xl font-bold text-purple-600">
                        Hero Jobs bd</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Home</NavLink></li>

                        <li><NavLink to={"/statistics"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Statistics</NavLink></li>

                        <li><NavLink to={"/appliedJobs"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Applied Jobs</NavLink></li>

                        <li><NavLink to={"/blog"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-purple-900 border-none hover:bg-purple-700">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;