import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingList from "./routers/ShoppingList";
import MenuPage from "./routers/MenuPage";
import Navigation from "./routers/Navigation";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./routers/Home";


function App() {
  //route paths declared 
  return (
   <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/menupage" element={<MenuPage />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
