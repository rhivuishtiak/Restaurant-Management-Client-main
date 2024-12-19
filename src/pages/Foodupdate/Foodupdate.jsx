import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Foodupdate = () => {

    const food = useLoaderData();
    const { _id,food_name, food_image, food_category,quantity, price, made_by, food_origin, description } = food;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const food_name = form.get('name');
        const food_image = form.get('img');
        const food_category = form.get('food_category');
        const quantity = form.get('quantity');
        const price = form.get('Price');
        const food_origin = form.get('Origin');
        const description = form.get('Description')
     
        const newFood={food_name,food_image,food_category,price,quantity,food_origin,description}

console.log(newFood)
fetch(`https://restaurant-management-server-six.vercel.app/foods/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newFood)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Product Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    })


    }
    return (
        <div>
            <div className="bg-[#698ea5ca]">
                <h2 className="text-3xl  pt-5 text-center font-bold">Update an Food item</h2>
                <form onSubmit={handleUpdate} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Name</span>
                        </label>
                        <input type="text" defaultValue={food_name}  required name="name" placeholder="Food Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Image</span>
                        </label>
                        <input type="text" defaultValue={food_image} required name="img" placeholder="Food Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food category</span>
                        </label>
                        <input type="text" defaultValue={food_category}  required name="food_category" placeholder="food_category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} required name="quantity" placeholder="Quantity you need" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Price</span>
                        </label>
                        <input type="text" defaultValue={price}  required name="Price" placeholder=" Price" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Food Origin</span>
                        </label>
                        <input type="text" defaultValue={food_origin} required name="Origin" placeholder="Food Origin" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <input type="text" defaultValue={description} required name="Description" placeholder="Description" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Foodupdate;