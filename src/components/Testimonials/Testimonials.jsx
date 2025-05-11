import React from "react";
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () =>{
    return(
        <div className="relative p-40 m-20 pt-0 pb-0 ml-auto mr-auto" id="testimonials">
            <img src={next_icon} alt="" className="bg-black absolute -translate-y-6/12 top-6/12 right-11 p-4 w-13 rounded-2xl cursor-pointer" />
            <img src={back_icon} alt="" className="bg-black absolute -translate-y-6/12 top-6/12 right-auto left-11 p-4 w-13 rounded-2xl cursor-pointer  " />

            <div id="slider">
                <ul>
                    <li>
                        <div id="slide">
                            <div id="user_info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity, USA </span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decission I've ever made. The supportive community, state-of-the-art facilitise, and commitment to acadmic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div id="slide">
                            <div id="user_info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity, USA </span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decission I've ever made. The supportive community, state-of-the-art facilitise, and commitment to acadmic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div id="slide">
                            <div id="user_info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity, USA </span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decission I've ever made. The supportive community, state-of-the-art facilitise, and commitment to acadmic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div id="slide">
                            <div id="user_info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>William jackson</h3>
                                    <span>Edusity, USA </span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decission I've ever made. The supportive community, state-of-the-art facilitise, and commitment to acadmic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}; 

export default Testimonials; 
