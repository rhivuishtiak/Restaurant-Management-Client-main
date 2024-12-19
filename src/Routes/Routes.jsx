import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoods from "../pages/AllFoods/AllFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import BlogPage from "../pages/BlogPage/BlogPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Ordering from "../pages/Ordering/Ordering";
import PrivateRoute from "./PrivateRoute";
import MyaddedFood from "../pages/MyaddedFood/MyaddedFood";
import AddFood from "../pages/AddFood/AddFood";
import Foodupdate from "../pages/Foodupdate/Foodupdate";
import Myorder from "../pages/Myorder/Myorder";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MenuPage from "../pages/MenuPage/MenuPage";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:()=>fetch('https://restaurant-management-server-six.vercel.app/topsell')
        },
        {
            path:'/login',
            element:<Login></Login>,
            
        }, 
        {
            path:'/register',
            element: <Registration></Registration>,
            
        }, 
        {
            path:'/ordering/:id',
            element:<PrivateRoute><Ordering></Ordering></PrivateRoute>,
            loader:({params})=>fetch(`https://restaurant-management-server-six.vercel.app/foodDetails/${params.id}`)

        },
        {
            path:'/myfood',
            element:<PrivateRoute><MyaddedFood></MyaddedFood></PrivateRoute>,

        },
        {
            path:'/addfood',
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>,

        },
        {
            path:'/myorder',
            element:<PrivateRoute><Myorder></Myorder></PrivateRoute>,
            loader:()=>fetch('https://restaurant-management-server-six.vercel.app/foodsItem')

        },
        {
            path: '/foodupdate/:id',
            element: <PrivateRoute><Foodupdate></Foodupdate></PrivateRoute>,
            loader:({params})=>fetch(`https://restaurant-management-server-six.vercel.app/foodDetails/${params.id}`)
        },
        
        {
            path:'/allFoods',
            element:<AllFoods></AllFoods>,
            
        },
        
        {
            path:'/blog',
            element:<BlogPage></BlogPage>,
            
        },
        {
            path:'/menu',
            element:<MenuPage></MenuPage>,
            
        },
        {
            path:'/about',
            element:<About></About>,
            
        },
        {
            path: '/foodDetails/:id',
            element: <FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`https://restaurant-management-server-six.vercel.app/foodDetails/${params.id}`)
        }
    ]
},
]);
export default router;