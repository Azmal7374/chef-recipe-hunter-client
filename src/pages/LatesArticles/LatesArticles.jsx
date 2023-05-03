import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faHeartBroken, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
const LatesArticles = ({article}) => {
    const{title,image, intitle, like, share,description, date} = article
    return (
        <div className="mt-10">
          <div className="lg:flex gap-10">
          <div className="">
             <img className="w-96 md:w-full lg:w- p-4 mx-auto" style={{borderRadius:'20px'}} src={image} alt="" />
          </div>

          <div className="">

          <div className="date text-gray-600 flex justify-between">
          <div className="">
            <p>{date}</p>
          </div>
          <div className="flex gap-4">
          <p className="text-gray-600 hover:text-orange-500"><FontAwesomeIcon className=" mx-2" icon={faHeartBroken}></FontAwesomeIcon>{like}</p>
          <p className="text-gray-600 hover:text-orange-500"><FontAwesomeIcon className="mx-2" icon={faShare}></FontAwesomeIcon>{share}</p>
          </div>
          </div>
           <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
           <p className='font-semibold  mt-3'> <span className="text-gray-600">In</span> {intitle}</p>
           <p className='text-gary-600  '>{description? description.slice(0,100) : description}...</p>
          
          <p className='flex gap-3 mt-3 text-gary-600 hover:text-orange-500'>READ MORE 
          <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </p>
          
          </div>
          
          </div>
        </div>
    );
};

export default LatesArticles;