import React from 'react';
import SecandaryHeader from '../SecondaryHeader/SecandaryHeader';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const AssingmentData = () => {
    const data = useLoaderData()
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