import React from 'react';

const Description = ({job}) => {
    const { company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, location, remote_or_onsite, salary } = job
    return (
        <>
            <h2> <span className='font-bold'>Job Description:</span> {job_description}
            </h2>
            <h2 className='my-7'> <span className='font-bold'>Job Responsibility:</span> {job_responsibility}
            </h2>
            <h2 className='my-7'> <span className='font-bold'>Educational Requirements:</span> <br />  <br />{educational_requirements}
            </h2>
            <h2 className='my-7'> <span className='font-bold'>Experiences:</span> {experiences}
            </h2>
        </>
    );
};

export default Description;