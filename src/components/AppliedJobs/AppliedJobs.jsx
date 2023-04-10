import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utility/fakedb';
import DisplayApplyJobs from '../DisplayApplyJobs/DisplayApplyJobs';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';

const AppliedJobs = () => {
    const lodadedjobs = useLoaderData()
    const [jobs, setJobs] = useState([])
    const storedJob = getStoredCart()
    // console.log(storedJob);
    const appliedJobscart = []
    for (const id in storedJob) {
        console.log(id);
        if (lodadedjobs) {
            const appliedJob = lodadedjobs.find(job => job.id === parseInt(id))
            appliedJobscart.push(appliedJob)
            console.log(appliedJob);
        }

    }
    useEffect(() => {

        setJobs(appliedJobscart)

    }, [])
    console.log(jobs);
    return (
        <>
        <SecandaryHeader>Applied Jobs</SecandaryHeader>
            <div className='md:w-[80%] mx-auto px-10 md:px-36 md:mb-52'>
                {
                    jobs.map(job => <DisplayApplyJobs key={job.id} job={job}></DisplayApplyJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;