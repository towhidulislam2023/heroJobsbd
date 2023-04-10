import React, { useEffect, useState } from 'react';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const AssingmentData = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('asssignment.json')
        .then(res=>res.json())
            .then(data => setData(data))
    },[])
    return (
        <>
            <SecandaryHeader> Assingnment Mark</SecandaryHeader>
            <div className='w-[] mx-auto'>
                <ResponsiveContainer width="80%" height={500}>
                    <ScatterChart
                        width={500}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="category" dataKey="name" name="Assignment" />
                        <YAxis type="number" dataKey="score" name="Score" />
                        <Tooltip />
                        <Scatter name="Assignment Marks" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default AssingmentData;