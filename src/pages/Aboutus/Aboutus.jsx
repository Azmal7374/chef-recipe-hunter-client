import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-container">
      <div className="my-container mt-10 bg-white p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            WHO <span className="text-purple-600">AM I?</span>
          </h1>
          <p className="mt-3 flex justify-center text-gray-500 font-semibold">I am a hard worker and  listen to my parents and teachers  every time.<br /> I love reading poetry and playing the guitar in my free time.</p>
          <hr className="mt-2 w-20 mx-auto border-2 border-purple-600" />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-20 justify-center">
        <div className="  rounded-md shadow-lg bg-white p-8">
        <img className="" src={user? user.photoURL : 'nai'} alt="" />
        </div>

          <div>
            <h1 className="text-2xl font-bold">
              Hello, I Am{" "}
              <span className="text-purple-600">{user ? user.displayName : "Junior Developer"}</span>{" "}
            </h1>
            <p className="mt-2 text-gray-500 font-semibold">
              I am <span className="text-purple-600">{user ? user.displayName : "Junior Developer"}</span>.
              I am a boy. I am 22 years old. I am a student. I read in  University.
              My school’s name is University Of Global Village. I play with my
              friends. I am tall and slim. But I am healthy. I have short black
              hair. My eyes are black too.I live in Dhaka with my parents. My
              father is a teacher. My mother also is a teacher. I have an elder
              sister. I have a pet cat. Her name is ‘Mimi’. We are a happy family. 
            </p>
            <div className="flex gap-32 mt-4">
            <p className="font-bold">Name:</p>
            <p className="text-gray-500">{user ? user.displayName : "Junior Developer"}</p>
            </div>
            <div className="flex gap-36 mt-4">
            <p className="font-bold">Age:</p>
            <p className="text-gray-500">22</p>
            </div>
            <div className="flex gap-28 mt-4">
            <p className="font-bold">Address:</p>
            <p className="text-gray-500">Crowland,Barisal</p>
            </div>
            <div className="flex gap-14 mt-4">
            <p className="font-bold">Phone Number:</p>
            <p className="text-gray-500">017190000333</p>
            </div>
            <div className="flex gap-32 mt-4">
            <p className="font-bold">Email:</p>
            <p className="text-gray-500">{user ? user.email : "mama@mami.com"}</p>
            </div>
            <div className="mt-8">
           <Link to=''>
           <button className="bg-purple-600 text-white font-bold p-2 w-40 rounded-md hover:bg-purple-700">Download Cv</button>
           </Link>
            </div>
          </div>

        </div>
      </div>
     
    </div>
  );
};

export default Aboutus;
