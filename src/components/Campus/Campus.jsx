import React from "react";
import { useState, useEffect } from "react";  
import galery1 from "../../assets/gallery-1.png";
import galery2 from "../../assets/gallery-2.png";
import galery3 from "../../assets/gallery-3.png";
import galery4 from "../../assets/gallery-4.png";
import whitearr from "../../assets/white-arrow.png";

const Campus = () => {
  const [hover, setHover] = useState(false); 
  useEffect
  return (
    <div id="campus" >
      <div
        className="flex justify-center gap-6 mt-10 mb-10"
        id="campus_images "
      >
        <img
          className="w-55 h-70 rounded-2xl cursor-pointer duration-75 hover:scale-105"
          src={galery1}
          alt=""
        />
        <img
          className="w-55 h-70 rounded-2xl cursor-pointer duration-75 hover:scale-105"
          src={galery2}
          alt=""
        />
        <img
          className="w-55 h-70 rounded-2xl cursor-pointer duration-75 hover:scale-105"
          src={galery3}
          alt=""
        />
        <img
          className="w-55 h-70 rounded-2xl cursor-pointer duration-75 hover:scale-105"
          src={galery4}
          alt=""
        />
      </div>
      <div className="flex justify-center mb-10 align-center items-center mt-1/2">
        <button className="bg-violet-800 text-white rounded-full p-4 pt-3 pb-3 flex cursor-pointer hover:scale-105 hover:bg-violet-700">
          See more images{" "}
          <div className="flex items-center">
            <img className="w-5 h-3 ml-2 " src={whitearr} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Campus;
