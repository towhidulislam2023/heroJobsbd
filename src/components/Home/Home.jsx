import React, { useEffect, useState } from 'react';
import manPicture from '../../assets/P3OLGJ1 copy 1.png';
import { Link, useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs.slice(0, 4));
    const [catagorys, srtCatagory] = useState([])
    const [displayAll, setDisplayAll] = useState(false)
    useEffect(() => {
        fetch('Catagory.json')
            .then(res => res.json())
            .then(data => srtCatagory(data.category))
    }, [])
    // console.log(catagorys);
    const handelSeeAllJobs = () => {
        setDisplayAll(!displayAll)
    }
    return (
        <>
            <section className='md:h-[65vh] md:w-[80%] bg-purple-100 mx-auto'>
                <div className='md:flex'>
                    <div className='md:w-[50%]  md:h-[65vh] p-14'>
                        <h1 className="text-5xl md:w-[50%] font-bold">One Step Closer To Your <br /><span className='text-purple-500'>Dream Job</span> </h1>
                        <p className='my-5 w-fit'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link className="btn bg-purple-900 border-none hover:bg-purple-700">Get started</Link>

                    </div>
                    <div className='md:w-[50%] text-right md:h-[65vh]'>
                        <img className='h-[100%] md:ml-32' src={manPicture} alt="" />
                    </div>
                </div>
            </section>
            <section className='my-16'>
                <div className='w-[80%] mx-auto text-center my-16'>
                    <h1 className='text-3xl font-bold my-4'>Job Category List</h1>
                    <p>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>

                </div>

                <div className='grid md:grid-cols-4 w-[80%] mx-auto gap-6'>
                    {
                        catagorys.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                    }
                </div>
            </section>
            <section>
                <div>
                    {
                        displayAll ? jobs.map(job => <p>{job.job_title}</p>) : jobs.slice(0,4).map(job => <p>{job.job_title}</p>)

                    }
                    <button className='btn' onClick={handelSeeAllJobs}>view All</button>
                </div>
            </section>
        </>
    );
};

export default Home;