import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utility/fakedb';
import DisplayApplyJobs from '../DisplayApplyJobs/DisplayApplyJobs';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';

const AppliedJobs = () => {
    const lodadedjobs = useLoaderData()
    // console.log(lodadedjobs);
    const [jobs, setJobs] = useState([])
    const storedJob = getStoredCart()
    // console.log(storedJob);
    const appliedJobscart = []
    for (const id in storedJob) {
        // console.log(id);
        if (lodadedjobs) {
            const appliedJob = lodadedjobs.find(job => job.id === parseInt(id))
            appliedJobscart.push(appliedJob)
            // console.log(appliedJob);
        }
    }
    useEffect(() => {

        setJobs(appliedJobscart)

    }, [])
    // console.log(jobs);
    const [filter,setfilter]=useState(false)
    const [filterjob,setfilterJob]=useState([])
    let remoteArr=[]
    const handelremoteJob = () => {
        setfilter(true)
        if (jobs) {
            const remoteJobs = jobs.filter(job => job.remote_or_onsite == 'Remote')
            console.log(remoteJobs);
            remoteArr= remoteJobs
        }
        setfilterJob(remoteArr);
    }
    let onsiteJobsarr=[]
const handelOnsitejob=()=>{
    setfilter(true)
    if (jobs) {
        const onSiteJobs = jobs.filter(job => job.remote_or_onsite == 'Onsite')
        console.log(onSiteJobs);
       onsiteJobsarr= onSiteJobs
    }
    setfilterJob(onsiteJobsarr);
}

    return (
        <>
            <SecandaryHeader>Applied Jobs</SecandaryHeader>
            <div className='w-[80%] ml-auto my-7'>
                <button onClick={handelremoteJob} className=' text-blue-500 hover:bg-blue-100 rounded-md px-4 py-1 border border-blue-700'>Remote</button>
                <button onClick={handelOnsitejob} className=' ml-3 text-blue-500 hover:bg-blue-100 rounded-md px-4 py-1 border border-blue-700'>On site</button>
            </div>

            <div className='md:w-[80%] mx-auto px-10 md:px-36 md:mb-52'>
                {
                    filter 
                    ? filterjob && filterjob.map(job => <DisplayApplyJobs key={job.id} job={job}></DisplayApplyJobs>)
                    : jobs && jobs.map(job => <DisplayApplyJobs key={job.id} job={job}></DisplayApplyJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;