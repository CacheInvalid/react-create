import React, { useState } from "react";
import StyledAndFilteredDisplayFoodItems from "../components/StyledAndFilteredDisplayFoodItems";

function Search({ details }) {
   const [searchField, setSearchField] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase())|| entry.description.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <StyledAndFilteredDisplayFoodItems foodList={filtered} />
      </div>
  
  );
}
export default Search;
