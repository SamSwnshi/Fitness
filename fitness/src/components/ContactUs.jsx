import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6 tracking-wider bg-[#D4C3AA] text-[#6F5B45] p-6">
    
      <h1 className="text-lg p-2 w-40 flex justify-center bg-[#ECE3D4] rounded-md">
        Contact Us
      </h1>
      <h1 className="text-6xl font-semibold text-[#372A15]">Get in Touch</h1>

      {/* Description */}
      <p className="text-lg text-center ">
        Have any questions or want to learn more about our gym? Fill out the
        form below, and we'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="w-full items-center  border-black justify-center flex flex-col gap-5">
        <div className="m-2 w-full  flex items-center justify-center gap-4">
          <label className="text-[#372A15]">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 w-2/5 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>

        <div className="m-2 w-full  flex items-center justify-center gap-4">
          <label className="text-[#372A15]">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-2/5 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>

        <div className="m-2 w-full  flex items-center justify-center gap-4">
          <label className="text-[#372A15]">Message</label>
          <textarea
            placeholder="Your Message"
            rows={4}
            className=" w-3/6 p-2 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>
      </form>

      {/* Submit Button */}
      <button className="w-36 h-12  rounded-md bg-[#ECE3D4] text-[#372A15] hover:bg-[#B89D75] transition">
        Send Message
      </button>
    </div>
  );
};

export default ContactUs;
