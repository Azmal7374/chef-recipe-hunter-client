import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefRecipeDetails = ({cDetails}) => {
  const [fold, setFold] = useState(true)
  const[disable, setDisable] = useState(true)
    const {_id,recipeTitle,cooking_rating, ingredirents,cookingMethods} = cDetails;
    console.log(cDetails);

    const handleDisable = () => {
      setDisable(false)
      toast('My Favourite Recipe!')
    }


    return (
        <div className="">
           <section className="">
            <div className="w-full border border-collapse border-gray-400 rounded-md md:rounded-sm p-8" style={{height:'700px'}}>
   
    <h2 className="font-bold text-2xl">{recipeTitle}</h2>
    <ul className='list-disc mt-2'>
    <p className="font-semibold">Ingerdiants:</p>
   <div className="ml-4 text-gray-600 ">
    {
      ingredirents.slice(0,5).map((ing, index) => <li key={index}>{ing}</li>)
    }
   </div>
    </ul>
    <div className="mt-3">
    <p className="font-bold">Cooking Methods:</p>
    
    
    { fold ?(
      <>
      <p className=' text-gray-500'>{cookingMethods.substring(0,100)}.....</p>
      <span className='cursor-pointer text-blue-600 mb-5' onClick={() =>setFold(!fold)}>Read More</span>
      </>
      ): (
        <>
        <p className=' text-gray-900'>{cookingMethods}....</p>
      <span className='cursor-pointer text-blue-600 mb-5' onClick={() =>setFold(fold)}>Read Less</span>
        </> 
      
  )
}
    </div>
    <div className='mt-2 flex items-center'>
        
    <Rating className='' 
    style={{ maxWidth: 100 }} 
    value={Math.round(cooking_rating.number || 0)} readonly />
      <span className='ml-2 '>{cooking_rating.number}</span>
      </div>
    <div className="">
      <button onClick={()=>handleDisable()} className="bg-gray-600   p-3 w-40  rounded-md   text-white font-bold hover:bg-gray-700 disabled:opacity-25 mb"
       disabled={!disable}>Favourite Recipe</button>
    </div>
</div>
           </section>
        </div>
    );
};

export default ChefRecipeDetails;