import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const{user} =useContext(AuthContext)
    return (
       <div className="bg-gray-500  w-96 mx-auto p-8 border border-white rounded-md mt-10">
       <div className='text-center'>
       <h1 className='text-white text-3xl font-bold'>{user? user.displayName :""}</h1>
       <p className='text-white text-xl '>{ user? user.Email :""}</p>
       <hr className='mt-4 border-2 border-gray-400'/>
      <div className='mt-4 '>
      <img className='w-24 h-24 mx-auto rounded-full' src={user? user.photoURL :""} alt="" />
      </div>
   </div>
   <Link to=''>
   <div className='text-center'>
   <button onClick={() => setShowModal(true)} className='bg-gray-600 p-3 w-40  rounded-md mt-8 text-white font-bold hover:bg-gray-700'>Update Profile
   </button>
   </div>
   </Link>
   {showModal ?
     
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Prifile Info</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowModal(false)}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              
              <label className="block text-black text-sm font-bold mb-1">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                 Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
              Image URL
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  
: ""}
 


       </div>
    );
};

export default ProfileDetails;