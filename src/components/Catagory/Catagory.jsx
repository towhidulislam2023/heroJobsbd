import React from 'react';

const Catagory = ({ catagory }) => {
    const { logo, name, jobs_available }=catagory
    return (
        <div className='border pt-7 pb-14 px-4 rounded-md'>
            <div className=' '>
                <img className='my-7 border-purple-400' src={logo} alt="" />
            </div>
           
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Catagory;