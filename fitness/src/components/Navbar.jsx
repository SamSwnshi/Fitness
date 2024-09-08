import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/color.png";
import { CgMenuHotdog } from "react-icons/cg";
import { TiCancelOutline } from "react-icons/ti";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toogleMenu = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="w-full p-3 bg-[#6F5B45] text-[#ECE3D4] flex justify-between items-center tracking-widest">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-18 h-10" />
        </Link>
      </div>
      <div className="hidden lg:flex w-1/3 justify-between items-center px-4">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/exercises" className="hover:text-blue-500">
          Exercises
        </Link>
        <Link to="/login" className="hover:text-blue-500">
          Login
        </Link>
        <Link to="/signup" className="hover:text-blue-500">
          SignUp
        </Link>
      </div>

      <div className="lg:hidden">
        <button onClick={toogleMenu}>
          {isToggle ? (
            
             <TiCancelOutline className="text-3xl"/>
          ) : (
            <CgMenuHotdog className="text-3xl" />
          )}
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-screen w-64 bg-[#6F5B45] z-50 p-6 transform transition-transform duration-300 ${isToggle ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col h-full gap-6 justify-center items-center">
          <li>
            <Link
              to="/"
              className="text-lg hover:text-blue-500"
              onClick={toogleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/exercises"
              className="text-lg hover:text-blue-500"
              onClick={toogleMenu}
            >
              Exercises
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-lg hover:text-blue-500"
              onClick={toogleMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-lg hover:text-blue-500"
              onClick={toogleMenu}
            >
              SignUp
            </Link>
          </li>
          <li>
            <button onClick={toogleMenu} className="self-end text-3xl">
              <TiCancelOutline />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
