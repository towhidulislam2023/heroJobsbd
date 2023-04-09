import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, Bars3Icon, BeakerIcon, BoltIcon, PresentationChartBarIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className='my-10'>
            <div className="navbar md:w-[80%] mx-auto ">
                <div className="navbar-start flex-grow">
                    <h2 className="normal-case flex text-4xl font-bold text-purple-600">
                        Hero Jobs bd</h2>
                </div>
                {/* <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-xl">
                        <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Home</NavLink></li>

                        <li><NavLink to={"/statistics"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Statistics</NavLink></li>

                        <li><NavLink to={"/appliedJobs"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Applied Jobs</NavLink></li>

                        <li><NavLink to={"/blog"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Blog</NavLink></li>
                    </ul>
                </div> */}
                <div className="flex-none ">
                    <span className='md:hidden' onClick={() => setOpenNav(!openNav)}>
                        {
                            openNav ? <XMarkIcon className='h-9 w-9'></XMarkIcon> : < Bars3Icon className='h-9 w-9' />

                        }
                    </span>
                    <ul onClick={() => setOpenNav(!openNav)} className={`md:flex gap-10 px-1 font-bold md:static absolute  duration-300 transition-all ${openNav ? "top-32 bg-gray-200  mr-20  " : "-top-48 "}`}>
                        <li className='my-3 md:my-0'><NavLink to={"/"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Home</NavLink></li>
                        <li className='my-3 md:my-0'><NavLink to={"/statistics"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Statistics</NavLink></li>
                        <li className='my-3 md:my-0'><NavLink to={"/appliedJobs"} className={({ isActive }) => isActive ? "text-purple-500 underline" : ""}> Applied Jobs</NavLink></li>
                        <li className='my-3 md:my-0'><NavLink to={"/blog"} className={({ isActive }) => isActive ? "text-purple-500  underline" : ""}> Blog</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end ">
                    <Link className="btn bg-purple-900 border-none hover:bg-purple-700">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;