import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink className="font-semibold text-lg" to="/">Home</NavLink></li>

        <li><NavLink className="font-semibold text-lg" to="/allFoods">All Food Items</NavLink></li>
        <li><NavLink className="font-semibold text-lg" to="/blog">Blog</NavLink></li>
        <li><NavLink className=" font-semibold text-lg" to="/about">About Us</NavLink></li>
    </>
    const handleProfile = () => {
        Swal.fire(
            'Logout success!',
            'You clicked the button!',
            'success'
        )
    }
    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Logout success!',
                    'You clicked the button!',
                    'success'
                )
            })
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="md:flex justify-center items-center">
                        <img className="h-14 md:ml-10 navbar-start " src={logo} alt="" />
                        <a className="  normal-case text-base md:text-2xl font-bold text-rose-500 md:ml-0  "><i>FoodieFleet</i></a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className=" md:flex items-center ">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <img  className="ml-40 md:ml-0 md:w-[40px] h-11 md:h-9 rounded-full" src={user.photoURL} alt="" />
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to={`/myfood`} className="hover:bg-amber-300 font-semibold ml-3 p-2 mb-4 bg-gray-300 rounded-xl"><a>My added food items</a></Link>
                                    <Link to="/addfood" className="hover:bg-amber-300 font-semibold ml-3 p-2 mb-4 bg-gray-300 rounded-xl"><a>Add a food item</a></Link>
                                    <Link to="/myorder" className="hover:bg-amber-300 font-semibold ml-3 p-2 mb-4 bg-gray-300 rounded-xl"><a> My ordered food items</a></Link>
                                </ul>
                            </div>
                            <p>UserName:{user.displayName}</p>

                            <button onClick={handleSignOut} className="btn ml-20 md:ml-0">Sign Out</button>
                        </div>

                            :
                            <Link to="/login" className="py-2 px-6 rounded-lg  bg-slate-600 text-white text-lg font-semibold mr-10">Login</Link>
                    }




                </div>

            </div>
        </div>
    );
};

export default Navbar;