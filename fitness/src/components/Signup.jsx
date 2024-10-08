import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not Match");
    }

    const userData = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Account created successfully!");

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    navigate("/login");
  };
  return (
    <div className="flex h-screen justify-center items-center  bg-[#D4C3AA] tracking-wider ">
      <div className="w-96 h-4/5 border-2 p-8 bg-[#ECE3D4] shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-3">Sign Up</h1>
        <p className="mb-4">Create your account to get started.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>
          <button
            type="submit"
            className="w-full  py-2 rounded-lg bg-[#6F5B45] text-[#ECE3D4] hover:bg-[#B89D75] transition duration-300 mb-2"
          >
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-[#372A15] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
