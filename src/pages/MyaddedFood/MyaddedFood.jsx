import { useLoaderData } from 'react-router-dom';
import MyFood from './MyFood';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { Helmet } from 'react-helmet-async';

const MyaddedFood = () => {
    const { user } = useContext(AuthContext);
    const{email}=user;
    const[Myaddedfood,setMyaddedfood]=useState([])
    
    useEffect(() => {
        fetch(`https://restaurant-management-server-six.vercel.app/food/${email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setMyaddedfood(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto bg-lime-100'>
            <Helmet>
            <title>FoodieFleet|MyAddedFood</title>
            </Helmet> 
            {

                Myaddedfood.length == 0 ? <div className='text-center max-w-7xl bg-slate-200 mt-4 mx-auto '>
                <p className='font-bold'>No Food added.</p>
                <img className='h-[500px] mx-auto' src="https://i.ibb.co/ZVR6MYF/9318688.jpg" alt="No results" />
            </div>
            : <div></div>      
        }
         <div className='lg:ml-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-2'>
                {
                    Myaddedfood.map(food => <MyFood
                        key={food._id} food={food}></MyFood>)
                }

            </div>
        </div>
    );
};

export default MyaddedFood;