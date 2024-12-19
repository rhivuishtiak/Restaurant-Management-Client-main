import React from 'react';
import { Link } from 'react-router-dom';

const OrderedFood = ({food,handleDelete}) => {
    const {_id,food_name,food_image,price,made_by,time}=food;
    
    return (
        <div>
            <div className="card mx-auto mt-4 bg-base-100 shadow-xl">
                <figure className="px-1 pt-3">
                    <img src={food_image} alt="Shoes" className="rounded-xl md:h-[200px] md:w-[400px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold mx-auto">{food_name}</h2>
                    <p className="font-semibold">Price:{price}$</p>
                    <p className="font-semibold">Food Owner:{made_by}</p>
                    <p className="font-semibold">Added time:{time}</p>

                    <div className="card-actions ">
                    <button onClick={()=>handleDelete(_id)} className="btn btn-primary flex-grow">Delete</button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderedFood;