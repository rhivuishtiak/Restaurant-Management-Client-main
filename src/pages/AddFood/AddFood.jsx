import { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const handleAdd = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const food_name = form.get('name');
        const food_image = form.get('img');
        const food_category = form.get('food_category');
        const quantity = form.get('quantity');
        const price = form.get('Price');
        const Add_by = form.get('BName');
        const made_by = user.displayName;
        const food_origin = form.get('Origin');
        const description = form.get('Description')
        const order_count = 0;
        const newFood={food_name,food_image,food_category,price,quantity,order_count,made_by,food_origin,description,Add_by}
e.target.reset();
console.log(newFood)
fetch('https://restaurant-management-server-six.vercel.app/addfood', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newFood)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Food Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cancel'
              })
        }
    })


    }
    return (
        <div>
            <Helmet>
            <title>FoodieFleet|AddFood</title>
            </Helmet> 
            <div className="bg-[#4283691a]">
                <h2 className="text-3xl  pt-5 text-center font-bold">Add an Food item</h2>
                <form onSubmit={handleAdd} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Name</span>
                        </label>
                        <input type="text"  required name="name" placeholder="Food Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Image</span>
                        </label>
                        <input type="text"  required name="img" placeholder="Food Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food category</span>
                        </label>
                        <input type="text"  required name="food_category" placeholder="food_category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Quantity</span>
                        </label>
                        <input type="text" required name="quantity" placeholder="Quantity you need" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Price</span>
                        </label>
                        <input type="text"  required name="Price" placeholder=" Price" className="input input-bordered" />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Add By</span>
                        </label>
                        <input type="email" defaultValue={user.email} required name="BName" placeholder="Buyer Name" readOnly className="input input-bordered" />

                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Origin</span>
                        </label>
                        <input type="text" required name="Origin" placeholder="Food Origin" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <input type="text" required name="Description" placeholder="Description" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;