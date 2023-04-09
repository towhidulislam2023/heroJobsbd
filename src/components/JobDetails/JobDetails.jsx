import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../../public/Jobs.json';
import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

const JobDetails = () => {
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job);
    const { company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, remote_or_onsit, salary } = job
    console.log(contact_information);
    return (
        <div>
            <h1 className='text-4xl text-center'>{job_title}</h1>
            <div className='flex w-[80%] mx-auto justify-between gap-10 my-32'>
                <div className='w-[70%]  px-4 py-7'>
                    
                    <h2> <span className='font-bold'>Job Description:</span> {job_description}
                    </h2>
                    <h2 className='my-7'> <span className='font-bold'>Job Responsibility:</span> {job_responsibility}
                    </h2>
                    <h2 className='my-7'> <span className='font-bold'>Educational Requirements:</span> <br />  <br />{educational_requirements}
                    </h2>
                    <h2 className='my-7'> <span className='font-bold'>Experiences:</span> {experiences}
                    </h2>
                </div>
                <div className='w-[30%] bg-blue-100 rounded-lg py-7 px-6'>
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

                </div>
            </div>
        </div>
    );
};

export default JobDetails;