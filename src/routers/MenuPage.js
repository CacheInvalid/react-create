import React from "react";
import FetchData from "../menus/FetchData";
import './csspage/Menu.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
function MenuPage() {
  return (
    <>
      <FetchData />
    </>
  );
}
export default MenuPage;

