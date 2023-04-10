import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../../public/Jobs.json';
import Description from '../Description/Description';
import JobInfo from '../JobInfo/JobInfo';
import { addToDb } from '../../utility/fakedb';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const jobData = jobs.find(job => job.id === parseInt(id));
        setJob(jobData);
    }, [id]);

    const handelAddToCart = (id) => {
        addToDb(id)
    }
    return (
        <div>
            <SecandaryHeader>Job Details</SecandaryHeader>
            <div className='md:flex md:w-[80%] mx-auto justify-between gap-10 my-2'>
                <div className='w-[70%]  px-4 py-7'>
                   {
                      job &&  <Description key={id} job={job} ></Description>
                   } 
                </div>
                <div className='md:w-[30%] bg-blue-100 rounded-lg py-7 px-6 '>
                    {
                        job && <JobInfo key={id} job={job}></JobInfo>
                    }
                 
                </div>
            </div>
            <div className='md:w-[80%] mx-auto mb-32'>
                <button onClick={()=>handelAddToCart(id)} className='btn btn-primary  md:w-[360px] bg-purple-700 hover:bg-purple-600 block mx-auto md:mx-0 md:ml-auto'>Apply Now</button>
            </div>
                   
        </div>
    );
};

export default JobDetails;