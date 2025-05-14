import React from "react";
import {useState, useEffect} from "react"
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const[sticky, setsticky]= useState(false); 

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, []);

  return (
    <nav className={`w-full text-white flex justify-between items-center p-2 fixed z-10 pl-20 pr-20 ${sticky ? "bg-violet-800 text-white shadow-lg ease-linear duration-100" : "bg-transparent text-blue-800"}`}>
      <div>
        <img src={logo} alt="" className="w-50 md:" />
      </div>
      <div className="flex space-x-5 justify- items-center">
        <ul className="flex space-x-5 item-center ">
          <li className="pointer"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li className="pointer"><Link to='program' smooth={true} offset={-300} duration={500}>Program </Link></li>
          <li className="pointer"><Link to='about' smooth={true} offset={-200} duration={500}>About us</Link></li>
          <li className="pointer"><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
          <li className="pointer"><Link to='testimonials' smooth={true} offset={-300} duration={500}> Testimonials</Link></li>
        </ul>
        <button className="bg-white p-2 text-black rounded-full border-1 border-black cursor-pointer hover:scale-105 transition ease-in-out duration-100">
          <Link to="contact" smooth={true} offset={-200} duration={500}>Contact-us</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
