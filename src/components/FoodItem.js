import React from 'react'
const FoodItem = ({food}) => {
    return (
        <div>    
                <p>{food.name}</p>
                <p>{food.description}</p>
                <p>{food.price}</p>          
        </div>
    );
};

export default FoodItem;