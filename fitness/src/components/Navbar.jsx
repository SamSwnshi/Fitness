import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-4 sticky top-0 flex bg-transparent justify-between items-center  ">
      <div>
        <img
          src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          className="w-18 h-12 rounded-full"
        />
      </div>
      <div className="flex w-1/3 justify-evenly items-center  border-gray-200 rounded-full px-4">
        <Link to="/home" className="hover:text-blue-500">Home</Link>
        <Link to="/exercises" className="hover:text-blue-500">Exercises</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/signup" className="hover:text-blue-500">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;
