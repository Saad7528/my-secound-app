import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    const {id, dish_name, price, category } = food;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={food.image_link}
                    width={200}
                    height={200}
                    alt="Picture of the author"></Image>

            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><small>{category}</small></p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                    <Link href={`/foods/${id}`}><button className="btn btn-ghost">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;