import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs=useLoaderData()
    console.log(jobs);
    return (
        <div>
            This is applied job page
        </div>
    );
};

export default AppliedJobs;