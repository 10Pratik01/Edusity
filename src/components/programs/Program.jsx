import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import picon1 from "../../assets/program-icon-1.png";
import picon2 from "../../assets/program-icon-2.png";
import picon3 from "../../assets/program-icon-3.png";
import '../../index.css';

const Program = () => {
  return (
    <div
      className="flex flex-wrap justify-between w-[90%] mt-[80px] mb-[80px] ml-auto mr-auto"
      id="program"
    >
      <div className="relative basis-[31%] [@media(max-width:550px)]:basis-[48%] mb-4">
        <img className="w-full h-[250px] object-cover rounded-3xl block" src={program_1} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center items-center top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
          <img src={picon1} alt="" />
          <p className="text-white">Graduation Degree</p>
        </div>
      </div>

      <div className="relative basis-[31%] [@media(max-width:550px)]:basis-[48%] mb-4">
        <img className="w-full h-[250px] object-cover rounded-3xl block" src={program_2} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center items-center top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
          <img src={picon2} alt="" />
          <p className="text-white">Graduation Degree</p>
        </div>
      </div>

      <div className="relative basis-[31%] [@media(max-width:550px)]:basis-full [@media(max-width:550px)]:flex [@media(max-width:550px)]:justify-center">
  <img className="w-full h-[250px] object-cover rounded-3xl block" src={program_3} alt="" />
  <div className="absolute flex flex-col rounded-3xl justify-center items-center top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 bg-indigo-900/60 pointer transition-opacity">
    <img src={picon3} alt="" />
    <p className="text-white">Graduation Degree</p>
  </div>
</div>
    </div>
  );
};

export default Program;
