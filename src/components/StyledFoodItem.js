import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stars from "../ratings/stars";

const StyledFoodItem = ({ food }) => {
  return (
    <div>
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <p>{food.description}</p>
        <p>{food.price}</p>
        <p>{food.ingredients}</p>
        <p>{food.vegetarian}</p>
        <div className="component"><Stars/></div>
      </Accordion.Body>
    </div>
  );
};

export default StyledFoodItem;
