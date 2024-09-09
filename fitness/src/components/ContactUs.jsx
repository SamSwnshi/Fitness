import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 tracking-wider bg-[#D4C3AA] text-[#6F5B45] p-6">
      <h1 className="text-lg p-2 w-32 md:w-40 flex justify-center bg-[#ECE3D4] rounded-sm">
        Contact Us
      </h1>
      <h1 className="text-4xl md:text-6xl font-semibold text-[#372A15]">
        Get in Touch
      </h1>

      {/* Description */}
      <p className="text-base md:text-lg text-center">
        Have any questions or want to learn more about our gym? Fill out the
        form below, and we'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg flex flex-col gap-5 items-center justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <label className="text-[#372A15] w-full md:w-1/5 text-center md:text-left">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 w-full md:w-4/5 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <label className="text-[#372A15] w-full md:w-1/5 text-center md:text-left">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-full md:w-4/5 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4">
          <label className="text-[#372A15] w-full md:w-1/5 text-center md:text-left">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full md:w-4/5 p-2 rounded-md border border-[#6F5B45] focus:outline-none focus:ring-2 focus:ring-[#D5B990]"
          />
        </div>
      </form>

      {/* Submit Button */}
      <button className="w-38 h-10 md:w-36 md:h-12 rounded-md bg-[#ECE3D4] text-[#372A15] hover:bg-[#B89D75] transition">
        Send Message
      </button>
    </div>
  );
};

export default ContactUs;
