import React from 'react';

const SecandaryHeader = ({children}) => {
    return (
        <div className='md:h-[30vh] bg-purple-50 my-auto'>
            <h1 className="text-center text-4xl md:pt-20 font-bold">{children}</h1>
        </div>
    );
};

export default SecandaryHeader;