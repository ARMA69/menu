import { Outlet } from "react-router-dom";
import LinkGroceryStore from "./LinkGroceryStore";
import videoBg from "../assets/videoBg.mp4";
import { motion } from "framer-motion";
import "./GroceryStore.css";
import { useState } from "react";
import {FaBars, FaHome, FaLock, FaMoneyBill, FaUser} from 'react-icons/fa'
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const routes = [
  {
     path: "#",
     name: "Home",
     icon: <FaHome />
  },
  {
    path: "#",
    name: "Home",
    icon: <FaHome />
 },
 {
  path: "#",
  name: "Home",
  icon: <FaHome />
},
{
  path: "#",
  name: "Home",
  icon: <FaHome />
},
{
  path: "#",
  name: "Home",
  icon: <FaHome />
},
{
  path: "#",
  name: "Home",
  icon: <FaHome />
},

]

const GroceryStore = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="videobg ">
        <video src={videoBg} autoPlay loop muted />
      </div>
      <div className="main-gs">
        <motion.div animate={{width: isOpen ? "200px" : "40px"}} className="sidebar-gs">

<div className="top_section">
  {isOpen && <h1 className="logo-gs">Grocery Store</h1> }
      <div className="bars-gs">
        <FaBars onClick={toggle} />
      </div>
</div>
<div className="search-gs">
  <div className="search_icon">
    <BiSearch/>
  </div>
  {isOpen && <input type="text" placeholder="Search..." />}
</div>


        
          <section className="routes">
          {routes.map((route) => (
          <NavLink to={route.path} key={route.name} className="link">
            <div className="icon">{route.icon}</div>
            <div className="link_text">{route.name}</div>
          </NavLink>
          ))}
          </section>
        </motion.div>
        
      </div>
      <LinkGroceryStore />
      <Outlet />
      
    </>
  );
};

export default GroceryStore;
