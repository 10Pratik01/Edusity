import React from "react";

const Content = () => {
  return (
    <>
      <div className=" bg-[url(/src/assets/hero.png)] h-screen w-screen bg-cover bg-center">
        <div className="bg-gradient-to-r from-indigo-900/60 to-indigo-900/60 b h-screen w-screen display flex justify-center items-center">
            <div className="text-block text-white text-center w-200">
                <h1 className="text-6xl text-cente">We Ensure better education for a better world</h1>
                <p className="line-clamp-3 m-4 text-1xl">Our cutting-edge curriculum is designed to empover students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className="bg-white text-black rounded-full p-3 pt-2 pb-2 text-l cursor-pointer hover:bg-grey-200 ">Explore more</button>
            </div>
        </div>
      </div>
    </>
  );
};
export default Content;
