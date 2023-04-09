import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const JobCart = ({job}) => {
    const { id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, } = job
    return (
        <div className='border pb-7 rounded-md'>
            <img className='w-[50%] mx-auto my-6 rounded-lg' src={company_logo} alt="" />
            <div className='px-14'>
                <h1 className='text-2xl font-bold '>{job_title}</h1>
                <p>{company_name}</p>
                <div className='flex my-2 gap-5 items-center'>
                    <div className=' text-blue-500 rounded-md px-4 py-1 border border-blue-700'>{remote_or_onsite}</div>
                    <div className=' text-blue-500 rounded-md px-4 py-1 border border-blue-700'>{fulltime_or_parttime}</div>
                </div>
                <div className='flex items-center gap-5'>
                    <MapPinIcon className='h-7 w-7 text-blue-700'></MapPinIcon>
                    <span>{location} </span> <span className='ml-5'> Salary:  {salary}</span>
                </div>
                <Link to={`/job/${id}`}><button className='btn btn-primary my-4'>View Details</button></Link>
              
            </div>
            

        </div>
    );
};

export default JobCart;