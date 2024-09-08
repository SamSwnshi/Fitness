import React from "react";

const Footer = () => {
  return (
    <div className="h-1/4 bg-[#ECE3D4] text-[#6F5B45]  p-6  tracking-wider">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div>
          <h1 className="text-2xl text-[#372A15] font-bold">LiftUp</h1>
          <p className="mt-2 font-lighter">Elevating Your Fitness Journey</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex gap-2 md:gap-4 mt-6 md:mt-0">
          <p>About Us</p>
          <p>Contact</p>
          <p>Exercises</p>
        </div>

        {/* Right Section - Legal Links */}
        <div className="flex  gap-2 md:gap-4 mt-6 md:mt-0">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>

      <hr className="my-6  border-[#372A15]" />

      {/* Bottom Section - Copyright */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm ">
        <h1 className="text-[#372A15] font-lighter">
          © 2024 LiftUp. All rights reserved.
        </h1>
        <div className="flex gap-7 mt-4 md:mt-0">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
