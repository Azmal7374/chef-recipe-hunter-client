import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ChefRecipeDetails = ({cDetails}) => {
    const {_id,recipeTitle,cooking_rating, ingredirents,cookingMethods} = cDetails;
    console.log(cDetails);
    return (
        <div className="">
           <section className="">
            <div className="w-full border border-collapse border-gray-400 rounded-md md:rounded-sm p-8">
   
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
    <p className='text-gray-600'>{cookingMethods.slice(0,200)}... <span className="text-orange-500">Read More</span></p>
    </div>
    <div className='mt-2 flex items-center'>
        
    <Rating className='' 
    style={{ maxWidth: 100 }} 
    value={Math.round(cooking_rating.number || 0)} readonly />
      <span className='ml-2'>{cooking_rating.number}</span>
      </div>
    <div className="">
      <button className='bg-gray-600 p-3 w-40  rounded-md mt-8 text-white font-bold hover:bg-gray-700'>Favourite Recipe</button>
    </div>
</div>
           </section>
        </div>
    );
};

export default ChefRecipeDetails;