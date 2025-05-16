import React from "react";
import about_img from "../../assets/about.png";
import play_btn from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="flex flex-row justify-evenly mt-30 mb-10  [@media(max-width:850px)]:flex-col " id="about">
      <div className="relative  [@media(max-width:850px)]:basis-[100%] [@media(max-width:850px)]:order-2  [@media(max-width:850px)]:ml-auto [@media(max-width:850px)]:mr-auto ">
        <img className="rounded-2xl block w-120 [@media(max-width:650px)]:w-90 [@media(max-width:650px)]:mt-5 " src={about_img} alt="" />
        <div className="absolute flex flex-col rounded-3xl justify-center align-middle items-center top-0 bottom-0 left-0 right-0 opacity-0  hover:opacity-100 pointer transition-opacity  [@media(max-width:1000px)]:opacity-50 [@media(max-width:850px)]:ml-auto [@media(max-width:850px)]:mr-auto">

        <img className="w-20 justify-center align-center " src={play_btn} alt="" />
        </div>
      </div>

      <div className="flex flex-col w-180 ml-5 [@media(max-width:850px)]:basis-[100%] max-w-[95%] ">
        <h3  className="font-bold text-2xl mb-2 text-blue-900">About university</h3>
        <h2 className="text-bold text-xl text-blue-950 text-bold font-bold mb-1">Nurturing Tommrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="[@media(max-width:500px)]:hidden">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          education leader, our diverse range of programs offers the perfect
          pathway to achive your goals and unlock your full potential in shaping
          the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
