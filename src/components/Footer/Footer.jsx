import React from 'react'; 

const Footer = () => {

    return(
       <div id="content" className='align-middle'>
         <div className="border-t-2 w-[95%] flex justify-around ml-auto mr-auto mb-20" id='footer'  >
            <p className='mt-5'>Created by Pratik Patil</p>
            <ul className='flex mt-5'>
                <li>Terms and Condition</li>
                <li className='ml-10'>Privacy policy</li>
            </ul>
        </div>
       </div>
    );
};

export default Footer;