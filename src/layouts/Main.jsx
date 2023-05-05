import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinnerContainer from '../pages/Shared/SpinnerContainer';
import { ColorRing } from 'react-loader-spinner';
import Footer from '../pages/Shared/Footer';
const Main = () => {
    // const [loading, setLoading] =useState(true);

    return (
        <div className=''>
       
            <Header></Header>
          
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
             
        </div>
    );
};

export default Main;