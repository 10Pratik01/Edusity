import React, {useRef} from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
    const slider = useRef(); 
    let tx=0; 
    let temp = 0
    const forward = () => {
        if(tx>-50){
            tx -= 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }
    const backward = () => {
        if(tx<0){
            tx +=25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (

    <div
      className="relative p-40 m-20 pt-0 pb-0 ml-auto mr-auto h-80"
      id="testimonials"

    >
      <img
        src={next_icon}
        alt=""
        className="bg-blue-600 absolute -translate-y-6/12 top-6/12 right-11 p-4 w-13 rounded-4xl cursor-pointer hover:scale-105 duration-75"
        onClick={forward}
      />
      <img
        src={back_icon}
        alt=""
        className="bg-blue-600 absolute -translate-y-6/12 top-6/12 right-auto left-11 p-4 w-13 rounded-4xl cursor-pointer hover:scale-105 duration-75 "
        onClick={backward}
      />

      <div id="slider" className="overflow-hidden">
        <ul ref={slider} className="flex overflow-x-hidden w-[200%] duration-2s transition ease-in-out h-80 ">
          <li className="list-none w-[50%] p-5 m-5 shadow-lg shadow-gray-400 ">
            <div id="slide" className="">
              <div id="user_info" className="flex mb-10">
                <img src={user1} alt="" className="border-3 border-blue-500 w-20 rounded-full" />
                <div className="text-center mt-auto mb-auto ml-5 text-xl ">
                  <h3 className="font-bold">William jackson</h3>
                  <span>Edusity, USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decission I've ever made. The supportive community,
                state-of-the-art facilitise, and commitment to acadmic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li className="list-none w-[50%] p-5  m-5 shadow-lg shadow-gray-400 ">
            <div id="slide" className="">
              <div id="user_info" className="flex mb-10">
                <img src={user2} alt="" className="border-3 border-blue-500 w-20 rounded-full" />
                <div className="text-center mt-auto mb-auto ml-5 text-xl ">
                  <h3 className="font-bold">William jackson</h3>
                  <span>Edusity, USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decission I've ever made. The supportive community,
                state-of-the-art facilitise, and commitment to acadmic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li className="list-none w-[50%] p-5  m-5 shadow-lg shadow-gray-400 ">
            <div id="slide" className="">
              <div id="user_info" className="flex mb-10">
                <img src={user3} alt="" className="border-3 border-blue-500 w-20 rounded-full" />
                <div className="text-center mt-auto mb-auto ml-5 text-xl ">
                  <h3 className="font-bold">William jackson</h3>
                  <span>Edusity, USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decission I've ever made. The supportive community,
                state-of-the-art facilitise, and commitment to acadmic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li className="list-none w-[50%] p-5  m-5 shadow-lg shadow-gray-400 ">
            <div id="slide" className="">
              <div id="user_info" className="flex mb-10">
                <img src={user4} alt="" className="border-3 border-blue-500 w-20 rounded-full" />
                <div className="text-center mt-auto mb-auto ml-5 text-xl ">
                  <h3 className="font-bold">William jackson</h3>
                  <span>Edusity, USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decission I've ever made. The supportive community,
                state-of-the-art facilitise, and commitment to acadmic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
