import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { useLoaderData } from 'react-router-dom';
import OrderedFood from '../OrderedFood/OrderedFood';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Myorder = () => {

    const { user } = useContext(AuthContext);
    const{email}=user;
    const[order,setOrder]=useState([])
    const FoodsItem = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const url = `user/${email}`;
    useEffect(() => {
        // fetch(`https://restaurant-management-server-six.vercel.app/user/${email}`,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => setOrder(data.Myorder))
        axiosSecure.get(url)
        .then(res => setOrder(res.data.Myorder))
    }, [url, axiosSecure])
    const cartIds = order.map(order => order._id);
    const Ids = order.map(order => order.Quantity);
    console.log(Ids)
    const foodsById = {};
    FoodsItem.forEach(food => {
    foodsById[food._id] = food;
  });
 
  const matchedfoods = cartIds.map(id => foodsById[id]);
  console.log(matchedfoods)
  const myfoods = matchedfoods.filter(pro => pro !== undefined);

    
  const handleDelete =_id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            const remaining = order.filter(food => food._id !== _id);
            const userUp = {
                email,
                "Myorder" : remaining
    
            }
            fetch('https://restaurant-management-server-six.vercel.app/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userUp)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                    )
                })
            setOrder(remaining);
            console.log(remaining)
                        
                        // window.location.reload(true)
                    
                

        }
    })
}
    
    
   
    return (
        <div className='max-w-7xl mx-auto p-6 bg-emerald-200'>
            <Helmet>
            <title>FoodieFleet|Myorder</title>
            </Helmet> 
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 '>
            {
            myfoods.map((food,index)=><OrderedFood key={index} food={food} handleDelete={handleDelete} ></OrderedFood>)}
            
        </div>
        </div>
    );
};

export default Myorder;