
import React from 'react';
import {Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';
import errors from '../../assets/errors.avif'

const ErrorPage = () => {
    const   {error, status} = useRouteError();
    console.log(error?.message);
    console.log(status);
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div>
         <img className='mt-10 w-96 rounded-md border' src={errors} alt="" />
        </div>
           
          <div className='max-w-md text-center'>
            <h2 className='mt-3 mb-2 font-extrabold text-4xl text-yellow-500'>
              <span className='sr-only'>Error</span>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-2xl text-gray-800 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className=' bg-gray-500 p-4 rounded-md text-white font-bold hover:bg-gray-700'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;