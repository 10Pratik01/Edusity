import React from "react";
import { Link } from "react-scroll";
const Content = () => {
  return (
    <>
      <div
        className=" bg-[url(/src/assets/hero.png)] h-screen w-screen bg-cover bg-center"
        name="hero"
        id="hero"
      >
        <div className="bg-gradient-to-r from-indigo-900/60 to-indigo-900/60 b h-screen w-screen display flex justify-center items-center">
          <div className="text-block text-white text-center w-200">
            <h1 className="text-6xl text-cente font-bold [@media(max-width:850px)]:text-[40px] [@media(max-width:650px)]:text-[30px] [@media(max-width:650px)]:max-w-100 [@media(max-width:650px)]:m-auto ">
              We Ensure better education for a better world
            </h1>
            <p className="line-clamp-3 m-4 text-1xl align-center[@media(max-width:850px)]:w-150 [@media(max-width:650px)]:text-[14px] [@media(max-width:650px)]:mt-4 [@media(max-width:650px)]:mb:7 [@media(max-width:650px)]:mr- [@media(max-width:650px)]:ml-">
              Our cutting-edge curriculum is designed to empover students with
              the knowledge, skills, and experiences needed to excel in the
              dynamic field of education
            </p>
            <button className="bg-white text-black rounded-full p-3 pt-2 pb-2 text-l cursor-pointer hover:bg-grey-200 hover:scale-106 transition ease-in-out duration-100 ">
              <Link to="about" smooth={true} offset={-300} duration={500}>Explore more</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
