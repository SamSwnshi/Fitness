import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-whites.png"

const Navbar = () => {
  return (
    <div className="w-full p-4  flex bg-transparent justify-between items-center tracking-widest  ">
      <div >
        <Link to ="/">
        <img
          src={logo}
          alt="Logo"
          className="w-18 h-10 "
        />
        </Link>
      </div>
      <div className="flex w-1/3 justify-between items-center  border-gray-200 px-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/exercises" className="hover:text-blue-500">Exercises</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/signup" className="hover:text-blue-500">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;
