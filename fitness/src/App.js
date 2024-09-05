import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExercisesDetails from "./components/ExercisesDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app bg-cover h-screen bg-[#f7fcff] text-[#9f2a00] font-suse">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:id" element={<ExercisesDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
