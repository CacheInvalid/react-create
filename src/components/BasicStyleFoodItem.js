import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stars from "./components/stars";
const FoodItem = ({ food }) => {
  return (
    <div className="card" style={{width: 50+"%;"}}>
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">£{food.price}</h6>
        <p className="card-text">{food.description}</p>
        <p className="card-text">{food.ingredients}</p>
        <div className="component"><Stars/></div>
      </div>
    </div>
  );
};

export default FoodItem;
