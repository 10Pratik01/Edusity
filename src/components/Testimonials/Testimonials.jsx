import React, {useRef} from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
    const slider = useRef(); 
    const back_hide = useRef();
    const front_hide = useRef(); 
    let tx=0; 
    
    let temp = 0
    const forward = () => {
        if(tx>-75){
            tx -= 25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`
        if(tx == -75){
          front_hide.current.style.visibility =`hidden`
        }else{
          front_hide.current.style.visibility =`visible`
          back_hide.current.style.visibility =`visible`
        }
    }
    const backward = () => {
        if(tx<0){
            tx +=25; 
        }
        slider.current.style.transform = `translateX(${tx}%)`
        if(tx == 0){
          back_hide.current.style.visibility =`hidden`
        }else{
          front_hide.current.style.visibility =`visible`
           back_hide.current.style.visibility =`visible`
        }
    }
  return (

    <div
      className="relative p-20 pt-0 pb-0 m-20 ml-auto mr-auto [@media(max-width:850)]:pl-5 [@media(max-width:850)]:pr-5 [@media(max-width:850)]:h-[120px]  "
      id="Testimonials"
    >
      <img
        src={next_icon}
        alt=""
        ref={front_hide}
        className="bg-violet-800 absolute -translate-y-6/12 top-6/12 right-11 p-4 w-13 rounded-4xl cursor-pointer hover:scale-105 duration-75 hover:bg-violet-700 [@media(max-width:850)]:p-[10px] [@media(max-width:850)]:w-[35px] [@media(max-width:850)]:right-8 z-2"
        onClick={forward}
      />
      <img
        src={back_icon}
        alt=""
        ref={back_hide}
        className="bg-violet-800 absolute -translate-y-6/12 top-6/12 right-auto left-11 p-4 w-13 rounded-4xl cursor-pointer hover:scale-105 duration-75 hover:bg-violet-700 [@media(max-width:850)]:p-[10px] [@media(max-width:850)]:w-[35px] [@media(max-width:850)]:left-8 z-2 "
        onClick={backward}
      />

      <div id="slider" className="overflow-x-hidden">
        <ul ref={slider} className="flex w-[200%] [@media(max-width:600px)]:w-[400%] duration-2s transition ease-in-out  ">
          <li className="list-none w-[50%] [@media(max-width:600px)]:w-[100%] [@media(max-width:850)]:h-full p-5 m-5 shadow-lg shadow-gray-400 [@media(max-width:850px)]:p-2 ">
            <div id="slide" className="[@media(max-width:850px)]:p-2">
              <div id="user_info" className=" mb-10 [@media(max-width:740px)]:mb-2 [@media(min-width:740px)]:flex">
                <img src={user1} alt="" className="border-3 border-blue-500 w-20 rounded-full [@media(max-width:850px)]:w-12 [@media(max-width:850px)]:border-blue-500  " />
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
          <li className="list-none w-[50%] p-5 [@media(max-width:600px)]:w-[100%] m-5 shadow-lg shadow-gray-400 [@media(max-width:850px)]:p-2 ">
            <div id="slide" className="">
              <div id="user_info" className="  mb-10 [@media(max-width:740px)]:mb-2 [@media(min-width:740px)]:flex">
                <img src={user2} alt="" className="border-3 border-blue-500 w-20 rounded-full [@media(max-width:850px)]:w-12 [@media(max-width:850px)]:border-blue-500" />
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
          <li className="list-none w-[50%] [@media(max-width:600px)]:w-[100%] p-5  m-5 shadow-lg shadow-gray-400 [@media(max-width:850px)]:p-2">
            <div id="slide" className="">
              <div id="user_info" className=" mb-10 [@media(max-width:740px)]:mb-2 [@media(min-width:740px)]:flex">
                <img src={user3} alt="" className="border-3 border-blue-500 w-20 rounded-full [@media(max-width:850px)]:w-12 [@media(max-width:850px)]:border-blue-500" />
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
          <li className="list-none w-[50%] p-5 [@media(max-width:600px)]:w-[100%] m-5 shadow-lg shadow-gray-400 [@media(max-width:850px)]:p-2">
            <div id="slide" className="">
              <div id="user_info" className=" mb-10 [@media(max-width:740px)]:mb-2 [@media(min-width:740px)]:flex">
                <img src={user4} alt="" className="border-3 border-blue-500 w-20 rounded-full [@media(max-width:850px)]:w-12 [@media(max-width:850px)]:border-blue-500 " />
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
