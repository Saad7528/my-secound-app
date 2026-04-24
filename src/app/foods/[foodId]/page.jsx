import Image from 'next/image';
import React from 'react';

const FoodDetailsPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const { dish_name, main_ingredients, cooking_steps, image_link } = data.data;

    return (
        <div>
            <Image
                src={image_link}
                width={300}
                height={300}
                alt="Picture of the author"></Image>
            <h1 className='text-4xl font-bold text-yellow-300'>{dish_name}</h1>
            <br />
            <p className='text-2xl'>Main Ingredients: {main_ingredients}</p>
            <br />
            <p className='text-2xl'>Cooking Steps: {cooking_steps}</p>
        </div>
    );
};

export default FoodDetailsPage;