import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { Audio, ThreeCircles } from 'react-loader-spinner';
import SpinnerContainer from '../pages/Shared/SpinnerContainer';

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
        console.log(loading);
    if(loading){
        return  (
          <div className="mt-10 text-center">
           <SpinnerContainer></SpinnerContainer>
          </div>
        )
    }
    
    if(user){
        return children;
     }
    return  <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;