import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    // console.log(data.data);
    return (
        <div>
            <ResponsiveContainer width="60%" height={400} className='mx-auto'>
                <LineChart width={700} data={data.data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8"></Line>
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;