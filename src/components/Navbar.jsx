import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  // Toggle mobile navigation
  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between text-white bg-black items-center h-25 px-10 mx-auto max-w-[1300px]">
      {/* Logo / Brand */}
      <div>
        <h1 className="text-5xl text-blue-700 font-bold">THE N SALES.</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-xl">
        <li className="p-4 hover:font-bold"><Link to="/">Home</Link></li>
        <li className="p-4 hover:font-bold"><Link to="/products">Products</Link></li>
        <li className="p-4 hover:font-bold"><Link to="/cart">Cart</Link></li>
        <li className="p-4 hover:font-bold"><Link to="/todo">ToDo</Link></li>
        <li className="p-4 hover:font-bold"><Link to="/about">About</Link></li>
        <li className="p-4 hover:font-bold"><Link to="/contact">Contact</Link></li>
        <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/Quiz">Quiz</Link></li>
      </ul>

      {/* Mobile Menu Toggle (hamburger / close icon) */}
      <div onClick={handleNav} className="md:hidden block">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-950 bg-[#000300] shadow-2xl ease-in-out duration-500 md:hidden "
            : "fixed -left-full"
        }
      >
        {/* Mobile Logo */}
        <div className="m-4 pt-5 ">
          <h1 className="text-5xl text-blue-700 font-bold">THE N SALES.</h1>
        </div>

        {/* Mobile Links */}
        <ul className="p-4 pt-20 uppercase text-2xl">
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/">Home</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/products">Products</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/cart">Cart</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/todo">ToDo</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/about">About</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/contact">Contact</Link></li>
          <li className="p-4 border-b border-gray-600 hover:font-bold"><Link to="/Quiz">Quiz</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
