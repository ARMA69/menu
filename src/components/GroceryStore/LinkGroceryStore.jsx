import React from "react";
import { NavLink } from "react-router-dom";
import "./GroceryStore.css";

const LinkGroceryStore = () => {
  return (
    <>
    <nav className="blockNavGroceryStore">
      <NavLink to="." className={({ isActive}) => isActive ? 'activeLink' : 'link'} end>Logo</NavLink>
      <NavLink to="Fruits" className={({ isActive}) => isActive ? 'activeLink' : 'link'}>Fruits</NavLink>
      <NavLink to="Meats" className={({ isActive}) => isActive ? 'activeLink' : 'link'}>Meats</NavLink>
      <NavLink to="Bakery" className={({ isActive}) => isActive ? 'activeLink' : 'link'}>Bakery</NavLink>
    </nav>
    </>
  );
};

export default LinkGroceryStore;
