import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; 

const FoodItem = ({food}) => {
    const {_id,food_name,food_image,food_category,price}=food;
    return (
        
        <div>
         
            <div className="card mx-auto mt-4 bg-base-100 shadow-xl">
                <figure className="px-1 pt-3">
                    <img src={food_image} alt="Shoes" className="rounded-xl md:h-[200px] md:w-[400px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold mx-auto">{food_name}</h2>
                    <p className="font-semibold">Food Category:{food_category}</p>
                    <p className="font-semibold">Price:{price}$</p>
                    <div className="card-actions ">
               
   <button></button> <Link to={`/foodDetails/${_id}`} className="btn btn-primary flex-grow">Deatils</Link>
    
  
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default FoodItem;