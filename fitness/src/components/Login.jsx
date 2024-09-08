import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault();

    const storedData = localStorage.getItem("user");

    if(storedData){
      const {
        email: storedEmail, password: storedPassword
      } = JSON.parse(storedData);

      if(email === storedEmail && password === storedPassword){
        alert("Login Successfully")
        navigate("/")
      }else{
        alert("Invalid email or password")
      }
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#ECE3D4] tracking-wider ">
      <div className="w-96  h-3/5  bg-[#D4C3AA] p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <p className="mb-8">Welcome back! Sign in to your account.</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
