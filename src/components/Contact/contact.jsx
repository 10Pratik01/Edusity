import React from "react";
import msg_img from '../../assets/msg-icon.png'
import arrow from "../../assets/white-arrow.png"
import mail_img from "../../assets/mail-icon.png"
import phone_img from '../../assets/phone-icon.png'
import location_img from "../../assets/location-icon.png"

const Constact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Y15820ae1-25dc-4620-8ba8-fd8ab4ae779c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="justify-around m-10 mb-20 flex" >
      <div className="m-20 w-[40%] mt-0 mb-auto" >
        <h3 className="flex text-2xl justify-center mb-5"><b>Send a message</b> <img className="w-[35px] ml-2" src={msg_img} alt="" /></h3>
        <p className="ml-10">
          Feel free to reach out through contact form or find out contact
          information below. your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul className="list-disc ml-20 mt-2">
          <li className="flex gap-2"> <img src={mail_img} alt="" className=" h-5"/>Contact@Edusity.dev</li>
          <li className="flex gap-2"><img src={phone_img} alt="" className="h-5 " /> +91 2938402938</li>
          <li className="flex gap-2"> <img src={location_img} alt="" className="h-5" />Address........ </li>
        </ul>
      </div>

      <div className="w-[40%]">
          <form onSubmit={onSubmit}>
            <label for="name" > Your Name </label> <br />
            <input type="text" id="name" placeholder="Your name" required  className="w-full h-10 p-2 bg-violet-200 rounded-sm mb-3"/>
            
            <label for="phone_number" >Phone number</label> <br />
            <input type="tel" id="phone_number" placeholder="Enter Phone number " required  className="w-full h-10 p-2 bg-violet-200   mb-3 rounded-sm"/>
            <br />
            <label for="your_msg">Message </label>
            <textarea name="your_msg" id="your_msg" cols={30} rows={6} placeholder="Enter your message" className="w-full h-20 p-2 bg-violet-200 mb-3 rounded-sm"></textarea>
            <br />
            <button type="submit" className=" border-2 border-black rounded-4xl p-5 pt-2 pb-2 text-white m-3 bg-violet-800 hover:scale-105 transition ease-in-out duration-200 cursor-pointer flex end-0 hover:bg-violet-700"> Submit <div className="flex items-center "><img src={arrow} alt="" className=" ml-2 w-6 h-3 "/></div> </button>
          </form>
          <span className="block m-[20px] ml-0 mr-0 ">{result} </span>
      </div>
    </div>
  );
};

export default Constact;
