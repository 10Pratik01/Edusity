import React from "react";
import {useState, useEffect} from "react"
import logo from "../../assets/logo.png";

const Navbar = () => {
  const[sticky, setsticky]= useState(false); 

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, [])

  return (
    <nav className={`w-full text-white flex justify-between items-center p-2 fixed z-10 pl-20 pr-20 ${sticky ? "bg-violet-800 text-white shadow-lg ease-linear duration-100" : "bg-transparent text-blue-800"}`}>
      <div>
        <img src={logo} alt="" className="w-50" />
      </div>
      <div className="flex space-x-5 justify- items-center">
        <ul className="flex space-x-5 item-center ">
          <li className="pointer">Home</li>
          <li className="pointer">Program</li>
          <li className="pointer">About us</li>
          <li className="pointer">Campus</li>
          <li className="pointer"> Testimonials</li>
        </ul>
        <button className="bg-white p-2 text-black rounded-full border-1 border-black cursor-pointer">
          Contact-us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
