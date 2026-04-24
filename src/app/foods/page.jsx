import React from 'react';
import FoodCard from '../component/foodcard/FoodCard';

const FoodPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = data.data;
    // console.log(foods);
    return (
        <div>
            <h1 className='text-5xl font-bold mt-5'>Total Foods: {foods.length}</h1>
            <div className='grid grid-cols-4 gap-4 mt-5'>
                {
                    foods.map(food => <FoodCard food={food} key={food.id}/>)
                }
            </div>
        </div>
    );
};

export default FoodPage;