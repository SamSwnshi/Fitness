import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#ECE3D4] text-[#6F5B45] p-6 tracking-wider">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl text-[#372A15] font-bold">LiftUp</h1>
          <p className="mt-2">Elevating Your Fitness Journey</p>
        </div>

        {/* Middle Section - Navigation Links */}
        {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left mb-6 md:mb-0">
          <Link to="/about" className="hover:text-[#372A15]">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-[#372A15]">
            Contact
          </Link>
          <Link to="/exercises" className="hover:text-[#372A15]">
            Exercises
          </Link>
        </div> */}

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
          <a
            href="https://www.linkedin.com/in/sameer-suryawanshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#372A15]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SamSwnshi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#372A15]"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/_sameer_suryawanshi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#372A15]"
          >
            Instagram
          </a>
        </div>
      </div>

      <hr className="my-6 border-[#372A15]" />

      {/* Bottom Section - Copyright and Legal Links */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm">
        <h1 className="text-[#372A15] mb-4 md:mb-0">
          © 2024 LiftUp. All rights reserved.
        </h1>
        <div className="flex gap-4 md:gap-8">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
