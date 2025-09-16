import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-peach py-4 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
  <img 
    src="../logo.png" 
    alt="CKFNC Logo" 
    className="h-10 w-10 rounded-full" 
    onError={(e) => {
      e.currentTarget.style.display = 'none';
    }}
  />
        <span className="font-heading text-xl font-bold text-coral">Cancer Kids First of NC</span>
      </div>
      <div className="hidden md:flex gap-6 font-heading text-blue">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/store">Store</Link>
      </div>
      <Link to="/donate" className="bg-coral text-white px-4 py-2 rounded font-bold shadow hover:bg-blue">Donate Now</Link>
    </nav>
  );
}