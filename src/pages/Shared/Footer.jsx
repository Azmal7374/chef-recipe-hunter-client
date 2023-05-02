import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-10">
        <footer className="footer p-10 bg-gray-700 text-base-content">
        <div className="text-white">
          <span className="font-bold text-2xl">Contact Info</span> 
        <div className="flex items-center ">
        <hr className="border w-10 border-white cursor-pointer " />
        <hr className=" w-96 border-white  cursor-pointer " />
        </div>
         <div className="mt-2">
         <div className="mt-2">
         <p>DO YOU HAVE A QUESTION?</p>
         <p className="font-bold text-xl mt-1">info@foodiecrush.com</p>
         </div>
         <div className='mt-6'>
         <p>SOCIALS NETWORK
         </p>
         <div className="mt-2">
         <div className="flex gap-4">
           <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
           <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
           <a className='hover:bg-orange-400'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
           <a className='hover:bg-orange-400'>
           
           </a>
         </div>
       </div>
         </div>
         </div>
        </div> 
        <div className='text-white md:ml-16'>
        
        <span className="font-bold text-2xl">Quick Links</span> 
        <div className="flex items-center ">
        <hr className="border w-10 border-white cursor-pointer " />
        <hr className=" w-96 border-white  cursor-pointer " />
        </div>
         <div className='grid grid-cols-2 gap-8' >
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link to='/home' className="no-underline  link  hover:text-orange-400">Home</Link> 
         <Link to='/jobs' className="link no-underline hover:text-orange-400  mt-3 md:mt-6">
         CONTACTS</Link> 
         <Link to='/careerAdvice' className="link   mt-3 no-underline hover:text-orange-400">RECIPES
         </Link> 
         </div>
         <div className='flex flex-col mt-3  ' style={{fontSize:'16px'}}>
         <Link to='/resume' className="link   hover:text-orange-400 no-underline">ABOUT US
         </Link>
         <Link to='/sector' className="link   mt-3 hover:text-orange-400 no-underline">EVENTS
         </Link>
         </div>
         </div>
        
        </div> 
        <div className='text-white  md:ml-16'>
        
        <span className="font-bold text-2xl">Our Company</span> 
        <div className="flex items-center ">
        <hr className="border w-10 border-white cursor-pointer " />
        <hr className=" w-96 border-white  cursor-pointer " />
        </div>
         <div className='grid grid-cols-2 gap-8 ' >
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link  className="link hover:text-orange-400 no-underline">About Us</Link> 
         <Link to='/policy' className="link mt-3 md:mt-6 hover:text-orange-400 no-underline">Privacy Policy</Link> 
         
         </div>
         <div className='flex flex-col mt-3' style={{fontSize:'16px'}}>
         <Link  className="link  hover:text-orange-400 no-underline">Contact Us</Link>
         <Link to='/terms'  className="link  hover:text-orange-400 no-underline mt-3">Terms & Conditions</Link>
         </div>
         </div>
        
        </div> 
       
      </footer> 
      <footer className="px-10 py-4 bg-gray-700 ">
      <hr  />
      <div className="text-center md:flex justify-between mt-4">
      <div>
      <p className="text-white">Copyright © 2023  Foodie Crush.  All rights reserved.</p>
    </div>
    <div className="text-white mt-4 md:mt-0 ">
    <div className="flex gap-4 justify-center">
    <Link  to='/terms'  className="hover:text-orange-400 no-underline">Terms & Conditions</Link>
    <p>|</p>
    <Link to='/policy'  className="hover:text-orange-400 no-underline" >Privacy Policy</Link>
    </div>
    </div>
     </div>
    </footer>
        </div>
    );
};

export default Footer;