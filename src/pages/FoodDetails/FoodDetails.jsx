import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    const { _id,food_name, food_image, food_category, price, made_by, food_origin, description } = food;
    return (
        <div className='max-w-7xl mx-auto  bg-base-100 shadow-2xl'>
            <div className="card md:w-[600px] bg-base-100 mx-auto pt-10 shadow-xl">
                <figure>                    <img src={food_image} alt="Shoes" className="rounded-xl h-[450px] w-[620px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Food Name: {food_name}</h2>
                    <p><span className='font-bold'>Food Category:</span>{food_category}</p>

                    <p><span className='font-bold'>Price:</span>{price}$</p>
                    <p><span className='font-bold'>Made By:</span>{made_by}</p>
                    <p><span className='font-bold'>Food Origin:</span>{food_origin}</p>
                    <p className=""><span className='font-bold'>Description:</span> {description}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/ordering/${_id}`} className="btn btn-primary flex-grow">Order</Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;