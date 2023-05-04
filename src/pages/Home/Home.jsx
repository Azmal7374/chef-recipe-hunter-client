import React, { useEffect, useState } from 'react';
import foodie1 from '../../assets/foodie1.avif'
import foodie2 from '../../assets/foodie2.avif'
import LatesArticles from '../LatesArticles/LatesArticles';
import Chefs from '../Chefs/Chefs';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faHeartBroken, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const [latesArticles, setLatesArticles] =useState([])
    useEffect(() =>{
        fetch('https://chef-recipe-hunter-server-azmal7374.vercel.app/latesarticles')
        .then(res=>res.json())
        .then(data =>setLatesArticles(data))
    },[])

    const chef = useLoaderData()
    
    
    return (
        <div className="my-container">
             <section className="bg-slate-100">
           <div className="md:flex gap-5 p-4">
           <div className=" mt-10 md:mt-32">
           <h2 className='ml-10 mr-10 text-gray-600'>The food blog with mostly healthy recipes made with real, whole foods inspiring more people to get into the kitchen and cook something good.
           </h2>
          <div className='ml-10 mr-10'>
          <button  className='bg-gray-600 p-3 w-40  rounded-md mt-8 text-white font-bold hover:bg-gray-700'>Chef Recipe</button>
          </div>
           </div>
           <div className=" mt-10">
           <img className="rounded-md" src={foodie1} alt="" />
           </div>
           </div>
             </section>

             <section className='mt-10'>
                <h2 className='text-center font-bold text-3xl'>Top Chef</h2>  
             <div className='grid md:grid-cols-2 gap-10'>
             {
                chef.map((chef) => <Chefs key={chef.id} chef={chef}></Chefs>)
           
             }
             
            

             </div>
             </section>

             <section className='mt-10'>
            <div className='md:flex justify-center'>
            <div className=''>
            <img className='' style={{height:'550px', width:'1000px'}} src={foodie2} alt="" />
            </div>
          <div className='bg-gray-700 w-full'style={{height:'550px'}}>
          <div className='pt-10 md:pt-24'>
          <hr className='border-2 border-gray-500    w-64 md:w-96 mx-auto'/>
          <h1 className='text-white text-2xl font-semibold mt-6 ml-14 mr-14 md:ml-28 md:mr-24'>Welcome to Good Food master сlass, part classroom, part playground and all kitchen.</h1>
            <hr className='border border-gray-500 w-64 md:w-96 mx-auto mt-4'/>
          <h3 className='text-gray-500 text-xl mt-6   ml-14 mr-14  md:ml-28 md:mr-24'>The Master Class will make you understand the   culinary processes, interact with products and interpret the art…</h3>
          <div className="mt-8 ml-14 mr-14  md:ml-28 md:mr-24">
          <button  className='bg-white p-3 w-48  mt- text-gray-500 font-bold hover:bg-gray-700 hover:border-2 border-white hover:text-white'>VISIT MASTER CLASS</button>
          </div>
          </div>
          </div>
            </div>
             </section>

             <section className='mt-10'>
             <h1 className='text-3xl font-bold text-center'>JOURNAL</h1>
             <div className="flex mt-5  items-center w-full">
             <hr className="border border-gray-500 w-64 md:w-full" />
         <p className='w-64 md:w-96 text-xl border text-center text-white bg-gray-600 p-1 rounded-full'>LATES ARTICLES</p>
             <hr className="border border-gray-500 w-64 md:w-full"  />
             </div>

             <div className='grid lg:grid-cols-2 gap-10'>
             {
               latesArticles.map((article) => <LatesArticles key={article.id} article={article}></LatesArticles>)
             }
             </div>
             </section>
        </div>
    );
};

export default Home;