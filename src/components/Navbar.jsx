import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <a href="/">Home</a> //! Не рекомендуется использовать тег <a/> для перехода к страницам, так как страницы перезагружаются
      <a href="/about">About us</a>
      <a href="/users">Users</a> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Navbar;
