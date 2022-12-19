import React from 'react';
import FoodItem from './FoodItem';

const DisplayFoodItems = ({foodList }) => {

   return (
       <div >
           {foodList.map((food, index) => {
               return (
                <FoodItem food={food} key={index} />
               )
           })}

       </div>
   );
};
 xport default DisplayFoodItems;   