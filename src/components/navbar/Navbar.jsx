import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import '../../index.css'

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  return (
    <nav
      className={`w-full text-white flex justify-between items-center p-2 fixed z-10 pl-30 pr-30 top-0 left-0 [@media(max-width:1200px)]:pl-10 [@media(max-width:1200px)]:pr-10 [@media(max-widtj:840px)]:p-[15px] [@media(max-width:840px)]:pl-0 [@media(max-width:840px)]:pr-0 ${
        sticky
          ? "bg-violet-800 text-white shadow-lg ease-linear duration-100"
          : "bg-transparent text-blue-800"
      }`}
    >
      <img src={logo} alt="" className="w-50 lg:w-[150px] [@media(max-width:1000px)]:w-[140px]" />

{/* nav_840px is written in index.css file */}
      <ul className="nav_840px"> 
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] [@media(max-width:840px)]:block m_25_40">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] [@media(max-width:840px)]:block m_25_40">
          <Link to="program" smooth={true} offset={-300} duration={500}>
            Program{" "}
          </Link>
        </li>
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] [@media(max-width:840px)]:block m_25_40 ">
          <Link to="about" smooth={true} offset={-200} duration={500}>
            About us
          </Link>
        </li>
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] [@media(max-width:840px)]:block m_25_40 ">
          <Link to="campus" smooth={true} offset={-300} duration={500}>
            Campus
          </Link>
        </li>
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] [@media(max-width:840px)]:block m_25_40 ">
          <Link to="testimonials" smooth={true} offset={-300} duration={500}>
            {" "}
            Testimonials
          </Link>
        </li>
        <li className="pointer inline-block m-2 ml-5 mr-5 text-[16px] hover:scale-105 [@media(max-width:840px)]:block ">
          <button className="bg-white p-2 text-black rounded-full border-1 border-black cursor-pointer hover:scale-105 transition ease-in-out duration-100 [@media(max-width:1000px)]:m-[10px] [@media(max-width:1000px )]:ml-[15px] [@media(max-width:1000px)]:mr-[15px] ">
            <Link to="contact" smooth={true} offset={-200} duration={500}>
              Contact-us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
