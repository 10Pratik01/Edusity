import React from "react";


const Title = ({title,subTitle}) => {
  return (
    <div className="font-normal text-center mt-20 mb-10">
      <p className="font-medium text-3xl c212EA0">{subTitle}</p>
      <h2 className="font-bold text-4xl c000F38">{title}</h2>
    </div>
  );
};

export default Title;
