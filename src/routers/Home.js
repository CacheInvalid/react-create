import React from "react";
// import Search from "./components/Search"
import Search from "../searches/SearchUsingClasses"
import "bootstrap/dist/css/bootstrap.min.css";
import './csspage/Home.css';
import SearchNutrition from "../searches/SearchNutrition";
import { items } from "../data/data";

function Home() {
  return (
   <>
    <div className="container">
      <Search details={items} />
    </div>
    
    <div className="container2">
        <SearchNutrition />
      </div>
    </>
  );
}

export default Home;
