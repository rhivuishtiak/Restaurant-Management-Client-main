import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Ordering = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
    const { _id, food_name, food_image,order_count, food_category,made_by, price, quantity } = food;
    const { user } = useContext(AuthContext);
    const {email}=user;
    const[carts,setCarts]=useState([])
    const axiosSecure = useAxiosSecure();
    const url = `user/${email}`;

    useEffect(() => {
        // fetch(`https://restaurant-management-server-six.vercel.app/user/${email}`,{credentials:'include'})
        //     .then(res => res.json())
        //     .then(data => setCarts(data.Myorder))
        axiosSecure.get(url)
        .then(res => setCarts(res.data.Myorder))
    }, [url,axiosSecure])
    const handleOrder = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const Quantity = form.get('quantity');
        const BName = form.get('BName');
        const time = form.get('BDate');
        if (BName == made_by ) {
            Swal.fire({
                title: 'Can not purchase Own added product!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        if (Quantity > quantity) {
            Swal.fire({
                title: 'You Order quantity must be less than available Quantity!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        if (Quantity <= 0) {
            Swal.fire({
                title: 'you can not order 0 or less quantity!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }
        if (quantity == 0) {
            Swal.fire({
                title: 'you can not order because available quantity is 0!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return;
        }

        const Puser = {
            _id,
            order_count: order_count+1,
            quantity: quantity-Quantity,
            time
        }
        console.log(Puser)
        fetch('https://restaurant-management-server-six.vercel.app/foods', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(Puser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        
                    })
       
          console.log(carts)
          const cart =[...carts,{_id,Quantity}]
        console.log(cart)
          const userUp = {
            email,
            "Myorder" : cart

        }
        console.log(userUp)
        fetch('https://restaurant-management-server-six.vercel.app/user',{
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
                            'food order success!',
                            'You clicked the button!',
                            'success'
                          )
                          navigate(location?.state ? location.state : '/allFoods');
                    })
        
    }
    return (
        <div>
            <Helmet>
            <title>FoodieFleet|Ordering</title>
            </Helmet> 
            <div className="bg-[#58778f1a]">
                <h2 className="text-3xl my-2 pt-5 text-center font-bold">Please Give Information for Order</h2>
                <form onSubmit={handleOrder} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Name</span>
                        </label>
                        <input type="text" defaultValue={food_name} required name="name" placeholder="Food Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Price</span>
                        </label>
                        <input type="text" defaultValue={price} required name=" Price" placeholder=" Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available Quantity: {quantity}</span>
                        </label>
                        <input type="text" required name="quantity" placeholder="Quantity you need" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buyer Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} required name="BName" placeholder="Buyer Name" readOnly className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buyer Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} required name="BEmail" placeholder="Buyer Email" readOnly className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Buying Date</span>
                        </label>
                        <input type="time" required name="BDate" placeholder="Buying Date" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Purchase</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Ordering;