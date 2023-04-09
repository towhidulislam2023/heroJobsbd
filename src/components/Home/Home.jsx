import React, { useEffect, useState } from 'react';
import manPicture from '../../assets/P3OLGJ1 copy 1.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const [catagorys,srtCatagory]=useState([])
    useEffect(()=>{
        fetch('Catagory.json')
        .then(res=>res.json())
            .then(data => srtCatagory(data.category))
    },[])
    console.log(catagorys);
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
        <section>
            <div>
                {
                        catagorys.map(catagory => <p>{catagory.name}</p>)
                }
            </div>

        </section>
        </>
    );
};

export default Home;