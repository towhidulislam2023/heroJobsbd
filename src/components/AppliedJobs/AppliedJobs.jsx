import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utility/fakedb';

const AppliedJobs = () => {
    const lodadedjobs=useLoaderData()
    const [jobs, setJobs] = useState(lodadedjobs)
    const storedJob = getStoredCart()
    // console.log(storedJob);
    const appliedJobscart=[]
    for (const id in storedJob){
        console.log(id);
        if (jobs) {
            const appliedJob = jobs.find(job => job.id === parseInt(id) )
            appliedJobscart.push(appliedJob)
            console.log(appliedJob);
        }

    }
    console.log(appliedJobscart);
    return (
        <div>
            This is applied job page
        </div>
    );
};

export default AppliedJobs;