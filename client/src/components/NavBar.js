import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg p-4 flex items-center justify-between ">
      {/* Site Name on the Left */}
      <div className="text-white text-lg font-extrabold">COLLOQUIUM.ai</div>
      
      {/* Pages in the Center */}
      <ul className="flex space-x-4 ml-10">
        <li><a href="/about" className="text-white hover:text-blue-400">About Us</a></li>
        <li><a href="/features" className="text-white hover:text-blue-400">Features</a></li>
        <li><a href="/dashboard" className="text-white hover:text-blue-400">Dashboard</a></li>
        <li><a href="/video" className="text-white hover:text-blue-400">Preview</a></li>
      </ul>
      
      {/* Sign in and Create Account on the Right */}
      <div className="flex space-x-4">
        <a href="/login" className="text-white hover:text-blue-400">Sign in</a>
        <button className="text-white hover:text-blue-400 bt rounded-3xl p-1" ><a href="/signup" className="text-white hover:text-blue-400">Create an account</a></button>
      </div>
    </nav>
  );
};



export default Navbar