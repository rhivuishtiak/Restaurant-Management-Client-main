import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

import { Navigate, useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return<div className="text-center pt-7">
        <ClipLoader
          size={35} 
          color={"#00BFFF"} 
          loading={true} 
        />
      </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;