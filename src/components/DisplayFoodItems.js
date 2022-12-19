import React from 'react';
import BasicStyleFoodItem from './BasicStyleFoodItem';
import Stars from "./components/stars";

const DisplayFoodItems = ({foodList }) => {
   return (
       <div>
           {foodList.map((food, index) => {
               return (
                <BasicStyleFoodItem food={food} key={index} />
               )
           })}
           <div className="component"><Stars/></div>
       </div>
   );
};
 
export default DisplayFoodItems;