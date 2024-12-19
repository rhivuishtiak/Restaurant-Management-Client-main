
import axios from "axios";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
 
const TopFood = ({ Foods }) => {

    return (
        
        <div>
            <h3 className={`text-center text-3xl mt-3 font-bold text-red-400 `}><i>Top Food section</i></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5 max-w-7xl mx-auto'>
                {
                    Foods.map(food => <FoodItem
                        key={food._id} food={food}></FoodItem>)
                }
            </div>
            <div className="text-center">
               <button className="py-2 px-4 bg-cyan-950 rounded-lg text-white mb-4"><Link to='/allFoods'>See All Products</Link></button> 
            </div>
        </div>
        
    );
};

export default TopFood;