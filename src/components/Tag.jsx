import React from 'react';

const Tag = ({ text }) => {
    return (
         <div className=" inline-flex items-center justify-center  mb-2 sm:mb-0  ">
            <p className=" font-medium sm:text-sm text-base bg-[#faf4eb] text-[#947a50] px-5 py-3  rounded-full  border border-[#dcd2c0]">{text}</p>
        </div>
    );
  };
  
  export default Tag; 
  