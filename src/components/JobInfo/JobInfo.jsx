import React from 'react';
import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const JobInfo = ({job}) => {
    const { company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, remote_or_onsite, salary } = job
    return (
        <>
            <h2 className="text-2xl my-2">Job Details</h2>
            <hr className='border-black' />
            <div className='my-2 py-2'>
                <span className='mb-3 flex gap-2 items-center'>
                    <CurrencyDollarIcon className='h-7 w-7 text-blue-600'></CurrencyDollarIcon>
                    <p className=''>Salary: {salary}</p>
                </span>
                <span className='mb-3 flex gap-2 items-center'>
                    <BriefcaseIcon className='h-7 w-7 text-blue-600' ></BriefcaseIcon>

                    <p>Job Title: {job_title}</p>
                </span>
            </div>
            <h2 className="text-2xl my-2">Contact Information</h2>
            <hr className='border-black' />
            <div className='my-2 py-2'>
                <span className='mb-3 flex gap-2 items-center'>
                    <PhoneIcon className='h-7 w-7 text-blue-600'></PhoneIcon>
                    <p className=''>Phone: {contact_information.phone}</p>
                </span>
                <span className='mb-3 flex gap-2 items-center'>
                    <EnvelopeIcon className='h-7 w-7 text-blue-600'></EnvelopeIcon>
                    <p className=''>Email: {contact_information.email}</p>
                </span>
                <span className='mb-3 flex gap-2 items-center'>
                    <MapPinIcon className='h-7 w-7 text-blue-600'></MapPinIcon>
                    <p className=''>Address: {location}</p>
                </span>
            </div>
        </>
    );
};

export default JobInfo;