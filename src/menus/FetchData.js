import React, { useEffect, useState, useCallback } from "react";
import MenuItems from "./MenuItems";


//ingredients list will be displayed 
const FetchData = () => {
  const [foods, setFoods] = useState(
 [
    { 
      ingredients: "Carrot"
    },
    {
      ingredients: "Bread"
    },
    {
      ingredients: "Lettuce"
    },
    {
      ingredients: "Chocolate"
    },
    {
      ingredients: "Chicken"
    },
    {
      ingredients: "Potatoe"
    },
    {
      ingredients: "Tomato"
    },
    {
      ingredients: "Bread"
    },
    {
      ingredients: "Chicken"
    },
    {
      ingredients: "Paprika"
    },
    {
      ingredients: "Garlic"
    },
]);

const fetchData = useCallback(() => {
  const url = "http://localhost:3001/food";
  fetch(url)
  .then((response) => response.json())
  .then((incomingData) => {
  console.log(foods)
  setFoods(incomingData);
  })
  .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
  fetchData();
  }, []);
  ///whenever user clicks on the ingredient that they have chosen, it will automatically be addedto their orders
  return (
    <div>
      <MenuItems items={foods} />
    </div>
  );
};
export default FetchData;
