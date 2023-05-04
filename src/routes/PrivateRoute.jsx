import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
        console.log(loading);
    if(loading){
        return  (
          <div className="mt-5 text-center">
          <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
          </div>
        )
    }
    
    if(user){
        return children;
     }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;