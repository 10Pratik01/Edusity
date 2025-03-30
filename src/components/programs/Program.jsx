import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import picon1 from "../../assets/program-icon-1.png";
import picon2 from "../../assets/program-icon-2.png";
import picon3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="flex flex-row justify-evenly w-screen mt-10 mb-10 ">
      <div className="relative ">
        <img className="w-100 rounded-3xl block " src={program_1} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center align-middle items-center top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
          <img src={picon1} alt="" />
          <p className="text-white">Graduation Degree</p>
        </div>
      </div>

      <div className=" relative">
        <img className="w-100 rounded-3xl block" src={program_2} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center align-middle items-center top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
          <img src={picon2} alt="" />
          <p className="text-white">Graduation Degree</p>
        </div>
      </div>

      <div className=" relative ">
        <img className="w-100 rounded-3xl block" src={program_3} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center align-middle items-center top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
          <img src={picon3} alt="" />
          <p className="text-white">Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
