import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 tracking-wider ">
      <h1 className="text-2xl">Contact Us</h1>
      <h1 className="text-6xl font-semibold">Get in Touch</h1>
      <p className="text-lg">
        Have any questions or want to learn more about our gym? Fill out the
        form below and we'll get back to you as soon as possible.
      </p>
      <form className="w-2/6 flex flex-col gap-5  ">
        <input type="text" placeholder="Name" className="p-2 rounded-sm" />
        <input type="email" placeholder="Name" className="p-2 rounded-sm" />
        <textarea placeholder="Message" rows={4} className="p-2 rounded-sm" />
      </form>
    </div>
  );
};

export default ContactUs;
