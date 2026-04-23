"use client"
import React, { useState } from 'react';

const CountPage = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className='text-5xl font-bold mt-5'>Your Count Result is : {count}</h1>
            <div className='space-x-5 mt-5'>
                <button onClick={() => setCount(count + 1)} className='btn btn-success'>Increment</button>
                <button onClick={() => setCount(0)} className='btn btn-success'>Reset</button>
            </div>
        </div>
    );
};

export default CountPage;