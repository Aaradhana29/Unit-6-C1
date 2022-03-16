import React from "react";
import { NavLink } from "react-router-dom";



const links = [
  {
    title: "Home",
    to: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    to: "/movies",
    id: "header-link-movies",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div style={{background:"lightgrey",padding:"20px"}}>
     {links.map(({title,to},index) => { 
        return <NavLink key={index} to = {to}
        style= {({isActive}) => ({
          color:isActive?'black':'grey',padding:10
        })}>
        {title}
        </NavLink>
      })}  
      {/* <Link to ="/" >Home</Link>
      <Link to="/about">About</Link>
      <Link to="/movies">Movies</Link> */}
    </div>
    //map through the link ad display it in header
  );
};
export default Navbar;
