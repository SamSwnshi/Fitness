import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExercisesDetails from "./components/ExercisesDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="app bg-cover h-screen bg-[#0e0e10] text-[#EFF0F3] font-suse">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:id" element={<ExercisesDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
