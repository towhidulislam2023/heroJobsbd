import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayApplyJobs = ({ job }) => {
    const { id,company_logo, company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, remote_or_onsite, fulltime_or_parttime, salary } = job
    console.log(job);
    return (
        <div className='md:w-[80%] border  my-10 rounded-lg border-black'>
            <div className='md:flex gap-9 items-center py-3 px-3'>
                <img className='md:h-32 md:w-32 my-auto mx-1 rounded-lg' src={company_logo} alt="" />
                <div className='md:flex-grow'>
                    <h1 className="text-2xl font-bold">{job_title}</h1>
                    <p>{company_name}</p>
                    <div className='flex my-2 gap-5 items-center'>
                        <div className=' text-blue-500 rounded-md px-4 py-1 border border-blue-700'>{remote_or_onsite}</div>
                        <div className=' text-blue-500 rounded-md px-4 py-1 border border-blue-700'>{fulltime_or_parttime}</div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <MapPinIcon className='h-7 w-7 text-blue-700'></MapPinIcon>
                        <span>{location} </span> <span className='ml-5'> Salary:  {salary}</span>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button className='btn btn-primary my-4'>View Details</button></Link>
            </div>
        </div>
    );
};

export default DisplayApplyJobs;