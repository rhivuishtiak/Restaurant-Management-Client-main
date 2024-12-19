
const Reservation = () => {
    return (
        <div className="text-center md:w-[650px] mx-auto mb-3 ">

            <h3 className={`text-center text-3xl mt-3 font-bold text-red-400 pb-5 `}><i>Reservation</i></h3>
            <p className="text-center ">Welcome to FoodieFleet, your destination for exceptional dining experiences. Our user-friendly website allows you to easily book a table for any occasion, and we offer real-time availability updates to ensure your plans align perfectly. Join us for a memorable culinary adventure – book your table today!</p>
          
                <form>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="Email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Phone Number:</span>
                        </label>
                        <input type="tel" required name="phone" placeholder="phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Number of Guests:</span>
                        </label>
                        <select className="input input-bordered" id="guests" name="guests">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                                        </div>

                                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Preferred Date:</span>
                        </label>
                        <input type="date" className="input input-bordered" id="date" name="date" required />
                                        </div>
                                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Preferred Time:</span>
                        </label>
                        <input type="time" className="input input-bordered" id="time" name="time" required />
                                        </div>
                    
                                     
                   
                                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Occasion:</span>
                        </label>
                        <select className="input input-bordered" id="occasion" name="occasion">
                        <option value="Business Meeting">Business Meeting</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>

                    </select>
                                        </div>

                                        <div className="">
                                        <input type="checkbox" id="subscribe" name="subscribe" value="Yes" />
                    <label for="subscribe">I would like to receive exclusive offers and updates via email.</label>
                                        </div>

                                        <div className="">
                                        <input type="checkbox" id="terms" name="terms" required />
                        <label for="terms">I agree to the terms and conditions.</label>
                                        </div>
                   

                                        <div className="form-control">
                                        <input type="submit" className="btn btn-neutral" value="Submit Reservation"/>
                                        </div>

                            
                </form>
                        
                        </div>


                        );
};

 export default Reservation;