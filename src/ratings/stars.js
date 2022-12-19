import React, { useState } from "react";
import Star from "./star";
import { useLocalStorage } from "../data/useLocalStorage";
import { createArray } from "../components/lib";
export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useLocalStorage();
//Saves star rating to local storage
//Means whenever user routes to a different section of the application, their rating will remain 
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))
      }
      <p> {selectedStars} of {totalStars} stars </p>
    </div>
  );
}



