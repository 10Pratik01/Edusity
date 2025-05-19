import React from "react";

const Footer = () => {
  return (
    <div id="content" className="align-middle">
      <div
        className="border-t-2 w-[95%] flex justify-around ml-auto mr-auto mb-20 gap-3"
        id="footer"
      >
        <p className="mt-5">
          <b>Created by Pratik Patil</b>
        </p>
        <ul className="flex mt-5 gap-3">
          <li>Terms and Condition</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
