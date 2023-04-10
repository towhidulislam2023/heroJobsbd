import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utility/fakedb';
import DisplayApplyJobs from '../DisplayApplyJobs/DisplayApplyJobs';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';

const AppliedJobs = () => {
    const [lodadedjobs, setloadedjobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [filter, setfilter] = useState(false);
    const [filterjob, setfilterJob] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => {
                setloadedjobs(data);
                const storedJob = getStoredCart();
                const appliedJobscart = [];
                for (const id in storedJob) {
                    const appliedJob = data.find((job) => job.id === parseInt(id));
                    appliedJobscart.push(appliedJob);
                }
                setJobs(appliedJobscart);
            });
    }, []);

    const handelremoteJob = () => {
        setfilter(true);
        if (jobs) {
            const remoteJobs = jobs.filter((job) => job.remote_or_onsite === 'Remote');
            setfilterJob(remoteJobs);
        }
    };

    const handelOnsitejob = () => {
        setfilter(true);
        if (jobs) {
            const onsiteJobs = jobs.filter((job) => job.remote_or_onsite === 'Onsite');
            setfilterJob(onsiteJobs);
        }
    };

    return (
        <>
            <SecandaryHeader>Applied Jobs</SecandaryHeader>
            <div className="w-[80%] ml-auto my-7">
                <button
                    onClick={handelremoteJob}
                    className="text-blue-500 hover:bg-blue-100 rounded-md px-4 py-1 border border-blue-700"
                >
                    Remote
                </button>
                <button
                    onClick={handelOnsitejob}
                    className="ml-3 text-blue-500 hover:bg-blue-100 rounded-md px-4 py-1 border border-blue-700"
                >
                    On site
                </button>
            </div>

            <div className="md:w-[80%] mx-auto px-10 md:px-36 md:mb-52">
                {filter
                    ? filterjob && filterjob.map((job) => <DisplayApplyJobs key={job.id} job={job} />)
                    : jobs && jobs.map((job) => <DisplayApplyJobs key={job.id} job={job} />)}
            </div>
        </>
    );
};

export default AppliedJobs;